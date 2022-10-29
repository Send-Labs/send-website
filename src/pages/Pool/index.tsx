import { useEffect, useState, useMemo } from 'react';
import { useWeb3React, Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { InjectedConnector } from '@web3-react/injected-connector';
import {
  Row,
  Col,
  Skeleton,
  Tabs,
  Button,
  Table,
  Affix,
  Drawer,
  Slider,
  TimePicker,
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
  assetColumnsTemplate,
  poolColumnsTemplate,
  childAssetColumns,
  childPoolColumns,
  childData,
  columnsPool,
  dataPool,
  childColumnsPool,
  childDataPool,
} from './data';

import styles from './index.less';
import MarketDashboard from '@/components/KpMarketDashboard';

const { TabPane } = Tabs;

const Page = (props) => {
  let { library, deactivate, chainId, account, active, activate, error } =
    useWeb3React();
  chainId = getNetworks()[3].id;

  const tokenList = getTokenList(chainId);

  const [selectedTab, setSelectedTab] = useState('Supply');
  const [pool, setPool] = useState(false);
  const [lm, setLm] = useState(false);
  const [r1, setR1] = useState({});
  const [r2, setR2] = useState({});
  const [expandedRowKeys, setExpandedRowKeys] = useState([]);
  const [tokenListData, setTokenListData] = useState({});
  const [poolList, setPoolList] = useState({});
  // const [poolData, setPoolData] = useState({});
  const [dashboardData, setDashboardData] = useState({});
  // const [assetData, setAssetData] = useState({});
  const [tokenTMP, setTokenTMP] = useState({});
  const [KpTokenList, setKpTokenList] = useState({}); // for making tokenlist from pool with most tokens
  // const [tmpPools, setTmpPools] = useState({});
  const [testData, setTestData] = useState({});

  const injected = new InjectedConnector({
    supportedChainIds: [56],
  });
  useEffect(() => {
    // activate(injected);
  }, []);
  const [visible, setVisible] = useState(false);
  const [key, setKey] = useState('1');

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
    setR1(item);
    setVisible(false);
  };
  const onSelectPool = (key, name) => {
    setR2((data) => {
      return { key, name };
    });
  };
  const onChange = (key: any) => {
    setKey(key);
  };

  //   // Covalent price feed
  let latestPrices = usePriceFeed();
  //   let poolListDataKeys = [];
  //   let poolTokenDataKeys = [];
  //   // let tokenTMP = {}

  //   const fetchTokensData = async () => {
  //     // const tokenList = getTokenList(chainId);
  //     // const newDashboardData = {};
  //     const poolListInfo = await readState(
  //       library,
  //       DataProvider.abi,
  //       getContractAddr('dataProvider'),
  //       'getAllPoolData',
  //       [],
  //     );
  //     if (!poolListInfo) {
  //       console.warn('market, failed to fetch poolListInfo from DataProvider');
  //     }
  // debugger;
  //     let newPoolList = {};
  //     let tmpKp = {};
  //     let fullList = {};
  //     for (let i = 0; i < poolListInfo.length; i++) {
  //       let pool = poolListInfo[i];
  //       const res = await readState(
  //         library,
  //         DataProvider.abi,
  //         getContractAddr('dataProvider'),
  //         'getAllReservesTokens',
  //         [i],
  //       );
  //       console.warn('warning while fetch tokenlist');

  //       if (!res) {
  //         console.warn(
  //           'market, failed to fetch tokenlist data from DataProvider',
  //         );
  //       }

  //       let data = {};
  //       for (let j = 0; j < res.length; j++) {
  //         let tmp = getToken(chainId, res[j][0]);
  //         data[res[j][0].toString()] = {
  //           name: res[j][0],
  //           address: res[j][1],
  //           symbol: res[j].symbol,
  //           tokenAddress: res[j].tokenAddress,
  //           pool: pool.name,
  //           decimals: tmp.decimals,
  //         };
  //       }
  //       newPoolList[`${pool.name} pool`] = data;
  //       //start of set longest tokenlist
  //       let poolListKeys = Object.keys(newPoolList);
  //       if (!poolListKeys[i - 1]) {
  //         setKpTokenList(data);
  //       } else {
  //         if (
  //           newPoolList[poolListKeys[i - 1]].length <
  //           newPoolList[poolListKeys[i]].length
  //         ) {
  //           setKpTokenList(data);
  //         }
  //       }
  //       //end of set longest tokenlist
  //     }
  //     setPoolList(newPoolList);
  //   };

  //   // fetch asset, ltv, totalSupply, supplyApr, totalBorrow, borrowApr for all token, all pools
  //   // dashboard data fetching
  //   const fetchDashboardData = async () => {
  //     const newDashboardData = {};
  //     let poolListKeys = Object.keys(poolList);
  //     let tmp = {};
  //     let tmpPool = {};
  //     let resultPools = {};
  //     // setTmpPools(poolListKeys);
  //     for (let i = 0; i < poolListKeys.length; i++) {
  //       tmp[poolListKeys[i]] = {};
  //       newDashboardData[poolListKeys[i]] = {};
  //       let newAssetBoardData = poolList[poolListKeys[i]];

  //       let newAssetBoardDataKeys = Object.keys(newAssetBoardData);

  //       for (let j = 0; j < newAssetBoardDataKeys.length; j++) {
  //         let poolToken = newAssetBoardData[newAssetBoardDataKeys[j]];

  //         const res = await readState(
  //           library,
  //           DataProvider.abi,
  //           getContractAddr('dataProvider'),
  //           'getReserveData',
  //           [i, poolToken.address],
  //         );
  //         console.warn('dashboard fetch has warning');
  //         if (!res) {
  //           console.warn('market, failed to fetch board data from DataProvider');
  //           break;
  //         }

  //         console.log(
  //           'hjhjhj see dashboard data fetched',
  //           res,
  //           'length: ',
  //           // res.length,
  //           'decimals: ',
  //           res[0][0],
  //           res[0][3],
  //           'ltv: ',
  //           toFloat(res[0][0], 2),
  //           'totalSupply: ',
  //           toFloat(res[2], 27),
  //           'totalBorrow:',
  //           toFloat(res[3], 27),
  //           'supplyApr',
  //           toFloat(res[4], 27),
  //           'borrowApr',
  //           toFloat(res[5], 27),
  //         );
  //         let data = {
  //           ltv: toFloat(res[0][0], 2),
  //           totalSupply: toFloat(res[2], 27),
  //           totalBorrow: toFloat(res[3], 27),
  //           supplyApr: toFloat(res[4], 27),
  //           borrowApr: toFloat(res[5], 27),
  //         };
  //         newDashboardData[`${poolListKeys[i]}`][`${poolToken.name}`] = data;
  //       }

  //       tmp[poolListKeys[i]] = newAssetBoardDataKeys;
  //     }
  //     setTokenTMP(tmp);
  //     setDashboardData(newDashboardData);
  //   };

  //   const fetchTestContract = async () => {
  //     poolListKeys = Object.keys(poolList);
  //     for (let i = 0; i < poolListKeys.length; i++) {
  //       let poolTokenData = poolList[poolListKeys[i]];
  //       // let poolToken = poolTokenData[poolTokenDataKeys[j]];
  //       for (let j = 0; j < poolTokenDataKeys.length; j++) {
  //         let poolToken = poolTokenData[poolTokenDataKeys[j]];
  //         const reserveConfigData = await readState(
  //           library,
  //           DataProvider.abi,
  //           getContractAddr('dataProvider'),
  //           'getReserveConfigurationData',
  //           [0, poolToken.address],
  //         );
  //         if (!reserveConfigData) {
  //           console.warn(
  //             'market, failed to fetch reserveConfigData from DataProvider',
  //           );
  //         }
  //       }
  //     }
  //   };
  //   const getAssetData = () => {
  //     if (tokenTMP == {}) {
  //       return;
  //     }

  //     let poolKeys = Object.keys(tokenTMP);
  //     let newTokenList = {};
  //     for (let i = 0; i < poolKeys.length; i++) {
  //       let poolKey = poolKeys[i];
  //       let tokenKeys = tokenTMP[`${poolKey}`];
  //       for (let j = 0; j < tokenKeys.length; j++) {
  //         let tokenKey = tokenKeys[j];
  //         if (newTokenList[tokenKey] == null) {
  //           newTokenList[tokenKey] = {};
  //         }
  //         newTokenList[tokenKey][poolKey] = dashboardData[poolKey][tokenKey];
  //       }
  //     }
  //     setTokenListData(newTokenList);
  //   };

  //   useEffect(() => {
  //     if (!library) return;
  //     library.on('block', async () => {
  //       await fetchTokensData();
  //     });
  //   }, [library]);

  //   useEffect(async () => {
  //     await fetchDashboardData();
  //     // getAssetData()
  //     // await fetchTestContract();
  //   }, [poolList]);

  //   useEffect(() => {
  //     getAssetData();
  //   }, [dashboardData]);

  const marketData = useMemo(() => {
    let tokens = Object.keys(tokenListData);

    let marketData = tokens.map((token, idx) => {
      let pools = Object.keys(tokenListData[token]).map((pool) => {
        // const key = `${token.name}-${pool}`;
        const temp = {
          key: token,
          token: token,
          name: pool,
          icon: '',
          ltv: parseFloat(tokenListData[token][pool].ltv) || 0,
          totalSupply:
            Math.round(
              parseFloat(tokenListData[token][pool]?.totalSupply) * 1000,
            ) / 1000,
          totalBorrow:
            Math.round(
              parseFloat(tokenListData[token][pool]?.totalBorrow) * 1000,
            ) / 1000,
          supplyApr: parseFloat(tokenListData[token][pool].supplyApr) || 0,
          borrowApr: parseFloat(tokenListData[token][pool].borrowApr) || 0,
        };

        if (temp.key == 'ETH') {
          temp.icon = '/eth.svg';
        }
        if (temp.key == 'USDC') {
          temp.icon = '/usdc.svg';
        }
        if (temp.key == 'MATIC') {
          temp.icon = '/matic.svg';
        }
        return temp;
      });

      const stats = {
        ltv: pools.reduce((prev, pool) => prev + pool.ltv, 0) / pools.length,
        totalBorrow: pools.reduce((prev, pool) => prev + pool.totalBorrow, 0),
        totalSupply: pools.reduce((prev, pool) => prev + pool.totalSupply, 0),
        borrowApr:
          pools.reduce((prev, pool) => prev + pool.borrowApr, 0) / pools.length,
        supplyApr:
          pools.reduce((prev, pool) => prev + pool.supplyApr, 0) / pools.length,
      };
      return {
        key: token,
        icon: pools[0].icon,
        name: token,
        pools,
        ...stats,
      };
    });
    console.log('debug check:', tokenList, ' :', latestPrices);

    return marketData;
  }, [tokenListData, latestPrices]);

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

  useEffect(() => {
    let newPoolData = [];
    if (marketData) {
      console.log('debug, poolData expanded: ', expandedRowKeys);
      newPoolData = marketData[expandedRowKeys]?.pools;
      console.log(
        'debug, poolData: ',
        marketData,
        expandedRowKeys,
        newPoolData,
      );
    }
    // setPoolData(newPoolData);
  }, [marketData, expandedRowKeys]);

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
  // const totalSupply = useMemo(() => {
  //   if (marketData) {
  //     return marketData.reduce(
  //       (prev, token) =>
  //         prev + token.totalSupply * (latestPrices[token.name] || 0),
  //       0,
  //     );
  //   }
  //   return 0;
  // }, [marketData]);
  // const totalBorrows = useMemo(() => {
  //   if (marketData) {
  //     return marketData.reduce(
  //       (prev, token) =>
  //         prev + token.totalBorrow * (latestPrices[token.name] || 0),
  //       0,
  //     );
  //   }
  //   return 0;
  // }, [marketData, latestPrices]);

  return (
    <div className={styles.market}>
      <Row gutter={16}>
        <Col  span={6}>
          <PoolCard />
        </Col>
        <Col  span={6}>
          <PoolCard />
        </Col>
        <Col  span={6}>
          <PoolCard />
        </Col><Col  span={6}>
          <PoolCard />
        </Col><Col  span={6}>
          <PoolCard />
        </Col><Col  span={6}>
          <PoolCard />
        </Col><Col  span={6}>
          <PoolCard />
        </Col><Col  span={6}>
          <PoolCard />
        </Col><Col  span={6}>
          <PoolCard />
        </Col><Col  span={6}>
          <PoolCard />
        </Col>
      </Row>

      <Row>
        <Col className={styles.main} span={24}>
          {/* <KpRpc totalSupply={totalSupply} totalBorrows={totalBorrows} /> */}
          <Row>
            <Col span={16}>
              <div>
                <Tabs
                  defaultActiveKey="1"
                  onChange={onChange}
                  type="card"
                  style={{
                    width: '200px',
                    border: '1px solid #1b1d23',
                    borderBottom: '0',
                    transform: 'translateY(1px)',
                  }}
                >
                  <TabPane tab="Assets" key="1"></TabPane>
                  <TabPane tab="Pools" key="2"></TabPane>
                </Tabs>
              </div>
              {(key == '1' && (
                <>
                  <Table
                    style={{ border: '1px solid #1b1d23' }}
                    columns={assetColumnsTemplate}
                    dataSource={marketData}
                    expandedRowKeys={expandedRowKeys}
                    onExpand={onTableRowExpand}
                    expandable={{
                      expandRowByClick: true,
                      expandedRowRender: (record1) => (
                        <div style={{ background: '#1b1d23' }}>
                          <KpChildTable
                            style={{ margin: '0' }}
                            columns={childAssetColumns}
                            showHeader={false}
                            pagination={false}
                            dataSource={record1.pools}
                            onRow={(record2) => {
                              return {
                                onClick: (event) => {
                                  setR1(record1);
                                  setR2(record2);
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
                      columns={poolColumnsTemplate}
                      dataSource={poolData}
                      expandable={{
                        expandRowByClick: true,
                        expandedRowRender: (record) => (
                          <div style={{ background: '#1b1d23' }}>
                            <KpChildTable
                              style={{ margin: '0' }}
                              columns={childPoolColumns}
                              showHeader={false}
                              pagination={false}
                              dataSource={record.tokens}
                              onRow={(record2) => {
                                return {
                                  onClick: (event) => {
                                    setR1(record2);
                                    setR2(record);
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
            <Col
              
              span={8}
              style={{ paddingLeft: '25px' }}
            >
              <Affix offsetTop={10}>
                <div className={styles.action}>
                  {/* <Tabs defaultActiveKey="1" type="card">
                    <TabPane tab="Supply" key="1">
                      <KpBuy
                        onSelectPool={onSelectPool}
                        onSelectToken={onSelectToken}
                      />
                    </TabPane>
                    <TabPane tab="Borrow" key="2">
                      <KpBuy
                        onSelectPool={onSelectPool}
                        onSelectToken={onSelectToken}
                      />
                    </TabPane>
                    <TabPane tab="Withdraw" key="3">
                      <KpBuy
                        onSelectPool={onSelectPool}
                        onSelectToken={onSelectToken}
                      />
                    </TabPane>
                    <TabPane tab="Repay" key="4">
                      <KpBuy
                        onSelectPool={onSelectPool}
                        onSelectToken={onSelectToken}
                      />
                    </TabPane>
                  </Tabs> */}
                  <KpTabs
                    onChange={(index) => setLm(index == 1)}
                    setSelectedTab={setSelectedTab}
                    tabType="market"
                  />
                  <KpBuy
                    onSelectPool={onSelectPool}
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
                    title="Select a Token"
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
                            <img src={item.icon} />
                            <p>{item.name}</p>
                          </div>
                          <div>
                            <p>0</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Drawer>
                </div>
              </Affix>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default Page;
