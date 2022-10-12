import { Row, Col, Dropdown, Menu } from 'antd';
import { SwapOutlined } from '@ant-design/icons';
import styles from './index.less';
import { getStatusClassNames } from 'antd/lib/_util/statusUtils';
import { pools } from '@/constants';
const Select = (props: any) => {
  return (
    <div className={styles.select}>
      <div className={styles.inp}>
        {props.icon && (
          <div className={styles.tokenIcon}>
            <img src={props.icon} />
          </div>
        )}

        <div className={styles.tokenName}>{props.name}</div>
        <svg
          className={styles.icon}
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
        </svg>
      </div>
    </div>
  );
};

const KpBigInput = (props: any) => {
  const { name, price, number, onSelectToken, onSelectPool, ...rest } = props;
  const selectToken = () => {
    onSelectToken();
  };
  const selectPool = (key, name) => {
    onSelectPool(key, name);
  };

  const menu = (props) => (
    <div className={styles.tokenlist}>
      {Object.keys(pools).map((pool, idx) => (
        <div className={styles.item}>
          <div onClick={() => selectPool(pools[pool].id, pool)}>
            <p>{pool}</p>
          </div>
        </div>
      ))}
    </div>
  );
  return (
    <div className={styles.kpselect} {...rest}>
      <div className={`${styles.root} ${styles.left}`} onClick={selectToken}>
        <label>Token</label>
        <Select
          name={props.dataSource.r1.name || 'Select'}
          icon={props.dataSource.r1.icon}
        />
      </div>
      {props.pool && (
        <div className={`${styles.root} ${styles.right}`}>
          <label>Pool</label>
          <div style={{ height: '100%' }}>
            <Dropdown overlay={menu}>
              <div style={{ height: '100%' }}>
                <Select
                  name={
                    (props.dataSource?.r2?.key && props.dataSource.r2.name) ||
                    'Select'
                  }
                />
              </div>
            </Dropdown>
          </div>
        </div>
      )}
    </div>
  );
};
export default KpBigInput;
