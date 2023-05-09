import { useEffect, useState, useMemo } from 'react';
import {
  Row,
  Col,
  Tabs,
  Table,
  Drawer,
  Modal,
} from 'antd';
import { getNetworks, getTokenList, pools, getToken } from '@/constants';
// import usePriceFeed from '@/components/Covalent';
import usePriceFeed from '@/components/Binance';
import { readState } from '@/apis';
import { getContractAddr } from '@/constants/addresses';
import DataProvider from '@/abis/DataProvider.json';
import { toFloat } from '@/utils';
import KpBuy from '@/components/KpBuy';
import KpRpc from '@/components/KpRpc';
import KpTabs from '@/components/KpTabs';
import KpChildTable from '@/components/KpChildTable';
import PoolCard from '@/components/PoolCard';

import {
  networkColumns,
  childNetworkColumns,
  dataNetwork,
  assetColumns,
  childAssetColumns,
  dataAssets,
  dataMyPool,
  mypoololumns,
  dataAvailable,
  dataTopPool
} from './data';

import styles from './index.less';
import MarketDashboard from '@/components/KpMarketDashboard';

const { TabPane } = Tabs;

const Page = (props) => {
 

  const tokenList = getTokenList(chainId);

  const [selectedTab, setSelectedTab] = useState('Supply');
  const [pool, setPool] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const [lm, setLm] = useState(false);
  const [r1, setR1] = useState({});
  const [r2, setR2] = useState({});
  const [expandedRowKeys, setExpandedRowKeys] = useState([]);
  const [tokenListData, setTokenListData] = useState();
  const [poolList, setPoolList] = useState({});
  // const [poolData, setPoolData] = useState({});
  const [dashboardData, setDashboardData] = useState({});
  // const [assetData, setAssetData] = useState({});
  const [tokenTMP, setTokenTMP] = useState({});
  const [KpTokenList, setKpTokenList] = useState({}); // for making tokenlist from pool with most tokens
  // const [tmpPools, setTmpPools] = useState({});
  const [testData, setTestData] = useState({});

  const [visible, setVisible] = useState(false);
  const [key, setKey] = useState('1');
  const [keyPool, setKeyPool] = useState('1');

  //   const showDrawer = () => {
  //     setVisible(true);
  //   };

  const onClose = () => {
    setVisible(false);
  };

  const onSelectToken = () => {
    setVisible(true);
  };
  const onSelectTokenCurrent = (item) => {
    setR1({assets:[{name:item.name,icon:item.icon}]});
    setVisible(false);
  };
  const onSelectChainCurrent = (item) => {
    setR2({network:[{name:item.symbol,icon:item.icon}]});
    setOpenDrawer(false);
  };
  const onChange = (key: any) => {
    setKey(key);
  };
  const onChangePool = (key: any) => {
    setKeyPool(key);
  };
  //   // Covalent price feed
  let latestPrices = usePriceFeed();


  const poolData = useMemo(() => {
    let pools = Object.keys(dashboardData);
    let poolData = pools.map((pool, idx) => {
      let tokens = Object.keys(dashboardData[pool]).map((token) => {
        const temp = {
          key: pool,
          token: pool,
          name: token,
          ltv: parseFloat(dashboardData[pool][token].ltv) || 0,
          totalSupply:
            Math.round(
              parseFloat(dashboardData[pool][token]?.totalSupply) * 1000,
            ) / 1000,
          totalBorrow:
            Math.round(
              parseFloat(dashboardData[pool][token]?.totalBorrow) * 1000,
            ) / 1000,
          supplyApr: parseFloat(dashboardData[pool][token].supplyApr) || 0,
          borrowApr: parseFloat(dashboardData[pool][token].borrowApr) || 0,
        };
        return temp;
      });

      const stats = {
        ltv:
          tokens.reduce((prev, token) => prev + token.ltv, 0) / tokens.length,
        totalBorrow: tokens.reduce(
          (prev, token) => prev + token.totalBorrow,
          0,
        ),
        totalSupply: tokens.reduce(
          (prev, token) => prev + token.totalSupply,
          0,
        ),
        borrowApr:
          tokens.reduce((prev, token) => prev + token.borrowApr, 0) /
          tokens.length,
        supplyApr:
          tokens.reduce((prev, token) => prev + token.supplyApr, 0) /
          tokens.length,
      };
      return {
        key: pool,
        icon: pool.icon,
        name: pool,
        tokens,
        ...stats,
      };
    });
    console.log('debug check:', tokenList, ' :', latestPrices);

    // setPoolData(poolDataTmp)
    return poolData;
  }, [dashboardData, latestPrices]);


  //   // only expand one row at a time: https://stackoverflow.com/questions/67295603/react-and-expandedrow-render-in-ant-design
  const onTableRowExpand = (expanded, record) => {
    const keys = [];
    if (expanded) {
      keys.push(record.key); // I have set my record.id as row key. Check the documentation for more details.
    }
    setExpandedRowKeys(keys);
  };
  const totalSupply = 0;
  const totalBorrows = 0;
  const chainList = [
    {
      'symbol': 'Ethereum',
      'icon': '/eth.svg'
    },
    {
      'symbol': 'BNB Chain',
      'icon': '/bnb.svg'
    },
    {
      'symbol': 'Polygon',
      'icon': '/polygon.svg'
    },
    {
      'symbol': 'Arbitrum',
      'icon': '/arb.svg'
    }
  ];
  return (
    <div className={styles.market}>
      <Tabs
        defaultActiveKey="1"
        onChange={onChangePool}
        type="card"
        style={{
          width: '400px',
          border: '1px solid #1b1d23',
          borderBottom: '0',
          transform: 'translateY(1px)',
          marginBottom: '4px'
        }}
      >
        <TabPane tab="My Pools" key="1">
        </TabPane>
        <TabPane tab="Available Pools" key="2">
        </TabPane>
        <TabPane tab="Top Pools" key="3">
        </TabPane>
      </Tabs>
      <Table
        style={{ border: '1px solid #1b1d23', marginBottom: '50px' }}
        columns={mypoololumns}
        dataSource={(keyPool == "1" && dataMyPool) || (keyPool == "2" && dataAvailable) || (keyPool == "3" && dataTopPool)}
        pagination={false}
        onRow={(record2) => {
          return {
            onClick: (event) => {
              setR1(record2);
              setR2(record2);
              setOpen(true);
            }, // 点击行
          };
        }}
      />
      <Row>
        <Col className={styles.main} span={24}>
          {/* <KpRpc totalSupply={totalSupply} totalBorrows={totalBorrows} /> */}
          <Row>
            <Col span={24}>
              <div>
                <Tabs
                  defaultActiveKey="1"
                  onChange={onChange}
                  type="card"
                  style={{
                    width: '400px',
                    border: '1px solid #1b1d23',
                    borderBottom: '0',
                    transform: 'translateY(1px)',
                    marginBottom: '4px'
                  }}
                >
                  <TabPane tab="Assets" key="1"></TabPane>
                  <TabPane tab="Network" key="2"></TabPane>
                </Tabs>
              </div>
              {(key == '1' && (
                <>
                  <Table
                    style={{ border: '1px solid #1b1d23' }}
                    columns={assetColumns}
                    dataSource={dataAssets}
                    expandedRowKeys={expandedRowKeys}
                    onExpand={onTableRowExpand}
                    expandable={{
                      expandRowByClick: true,
                      expandedRowRender: (record1) => (
                        <div style={{ background: '#040000' }}>
                          <KpChildTable
                            style={{ margin: '0' }}
                            columns={childAssetColumns}
                            showHeader={false}
                            pagination={false}
                            dataSource={record1.childData}
                            onRow={(record2) => {
                              return {
                                onClick: (event) => {
                                  setR1(record1);
                                  setR2(record2);
                                  setOpen(true);
                                }, // 点击行
                              };
                            }}
                          />
                        </div>
                      ),
                    }}
                    pagination={false}
                  />
                  {/* <MarketDashboard KpTokenList={KpTokenList} /> */}
                </>
              )) || (
                  <>
                    <Table
                      style={{
                        border: '1px solid #1b1d23',
                        whiteSpace: 'nowrap',
                      }}
                      columns={networkColumns}
                      dataSource={dataNetwork}
                      expandable={{
                        expandRowByClick: true,
                        expandedRowRender: (record) => (
                          <div style={{ background: '#040000' }}>
                            <KpChildTable
                              style={{ margin: '0' }}
                              columns={childNetworkColumns}
                              showHeader={false}
                              pagination={false}
                              dataSource={record.childData}
                              onRow={(record2) => {
                                return {
                                  onClick: (event) => {debugger
                                    setR1(record);
                                    setR2(record2);
                                    setOpen(true);
                                  }, // 点击行
                                };
                              }}
                            />
                          </div>
                        ),
                      }}
                      pagination={false}
                    />
                    {/* <MarketDashboard /> */}
                  </>
                )}
            </Col>
          </Row>
        </Col>
      </Row>
      <Modal
        open={open}
        footer={null}
        bodyStyle={{ padding: '0' }}
        closable={false}
        onCancel={() => setOpen(false)}
      >

        <div className={styles.action}>
          <KpTabs
            onChange={(index) => setLm(index == 1)}
            setSelectedTab={setSelectedTab}
            tabType="market"
          />
          <KpBuy
            onSelectPool={() => setOpenDrawer(true)}
            onSelectToken={onSelectToken}
            selectedTab={selectedTab}
            KpTokenList={KpTokenList}
            dataSource={{
              r1,
              r2,
            }}
            open={() => props.setVisibleMetaMask(true)}
          />
          <Drawer
            title="Select Token"
            className={styles.h100}
            placement="bottom"
            onClose={onClose}
            visible={visible}
            getContainer={false}
            maskClosable={false}
            // closeIcon={false}
            style={{ position: 'absolute' }}
          >
            <div className={styles.title}>
              <div>
                <p>Token Name</p>
              </div>
              <div>
                <p>Balance</p>
              </div>
            </div>
            <hr />

            <div className={styles.tokenlist}>
              {getTokenList(chainId).map((item) => (
                <div
                  className={styles.item}
                  onClick={() => onSelectTokenCurrent(item)}
                >
                  <div>
                    <img src={item.icon} style={{ marginRight: '15px' }} />
                    <p>{item.name}</p>
                  </div>
                  <div>
                    <p>0</p>
                  </div>
                </div>
              ))}
            </div>
          </Drawer>
          <Drawer
            title="Select  Chain"
            className={styles.h100}
            placement="bottom"
            onClose={() => setOpenDrawer(false)}
            visible={openDrawer}
            getContainer={false}
            maskClosable={false}
            // closeIcon={false}
            style={{ position: 'absolute' }}
            bodyStyle={{ paddingTop: '0' }}
          >
            <div className={styles.tokenlist}>
              {chainList.map((item) => (
                <div
                  className={styles.item}
                  onClick={() => onSelectChainCurrent(item)}
                >
                  <div>
                    <img src={item.icon} style={{ marginRight: '15px' }} />
                    <p>{item.symbol}</p>
                  </div>
                </div>
              ))}
            </div>
          </Drawer>
        </div>
      </Modal>

    </div>
  );
};
export default Page;
