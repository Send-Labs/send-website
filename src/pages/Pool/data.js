import { Table } from 'antd';
import KpToken from '@/components/KpToken';
import KpTotal from '@/components/KpTotal';
// market  page
export const assetColumnsTemplate = [
  {
    title: 'Asset',
    width: '16%',
    dataIndex: 'icon',
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    sorter: (a, b) => a.name.length - b.name.length,
    showSorterTooltip: false,
    render: (text, item) => <KpToken icon={text} name={item.name} />,
  },
  {
    title: 'LTV',
    width: '16%',
    dataIndex: 'ltv',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a - b,
    showSorterTooltip: false,
    render: (text) => `${text.toFixed(3)}%`,
  },
  {
    title: 'Total Supply',
    width: '16%',
    dataIndex: 'totalSupply',
    sorter: (a, b) => a.totalSupply - b.totalSupply,
    showSorterTooltip: false,
    render: (text, item) => (
      <>
        {console.log('debug check', text, item)}
        <KpTotal number={item.totalSupply} name={item.name} />
      </>
    ),
  },
  {
    title: 'Supply APR',
    width: '16%',
    dataIndex: 'supplyApr',
    sorter: (a, b) => a.supplyApr - b.supplyApr,
    showSorterTooltip: false,
    render: (text) => `${text.toFixed(3)}%`,
  },
  {
    title: 'Total Borrow',
    width: '16%',
    dataIndex: 'address',
    sorter: (a, b) => a.totalBorrow - b.totalBorrow,
    showSorterTooltip: false,
    render: (text, item) => (
      <KpTotal number={item.totalBorrow} name={item.name} />
    ),
  },
  {
    width: '19%',
    title: 'Borrow APR',
    dataIndex: 'borrowApr',
    sorter: (a, b) => a.borrowApr - b.borrowApr,
    showSorterTooltip: false,
    render: (text) => `${text.toFixed(3)}%`,
  },
  Table.EXPAND_COLUMN,
];
export const poolColumnsTemplate = [
  {
    title: 'Asset',
    width: '16%',
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    sorter: (a, b) => a.name.length - b.name.length,
    showSorterTooltip: false,
    render: (item) => <KpToken pool={true} name={item.name} />,
  },
  {
    title: 'LTV',
    width: '16%',
    dataIndex: 'ltv',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a - b,
    showSorterTooltip: false,
    render: (text) => `${text.toFixed(3)}%`,
  },
  {
    title: 'Total Supply',
    width: '16%',
    dataIndex: 'totalSupply',
    sorter: (a, b) => a.totalSupply - b.totalSupply,
    showSorterTooltip: false,
    render: (text, item) => (
      <>
        {console.log('debug check', text, item)}
        <KpTotal number={item.totalSupply} name={item.name} />
      </>
    ),
  },
  {
    title: 'Supply APR',
    width: '16%',
    dataIndex: 'supplyApr',
    sorter: (a, b) => a.supplyApr - b.supplyApr,
    showSorterTooltip: false,
    render: (text) => `${text.toFixed(3)}%`,
  },
  {
    title: 'Total Borrow',
    width: '16%',
    dataIndex: 'address',
    sorter: (a, b) => a.totalBorrow - b.totalBorrow,
    showSorterTooltip: false,
    render: (text, item) => (
      <KpTotal number={item.totalBorrow} name={item.name} />
    ),
  },
  {
    width: '19%',
    title: 'Borrow APR',
    dataIndex: 'borrowApr',
    sorter: (a, b) => a.borrowApr - b.borrowApr,
    showSorterTooltip: false,
    render: (text) => `${text.toFixed(3)}%`,
  },
  Table.EXPAND_COLUMN,
];
// export const childColumns = [
//   {
//     title: 'Asset name',
//     dataIndex: 'name',
//     width: '16%',
//     // specify the condition of filtering result
//     // here is that finding the name started with `value`
//     // sorter: (a, b) => a.name.length - b.name.length,
//     render: (text, item) => (
//       <>
//         {
//           item.pools.map(pool => (
//             `0${pool.key}&nbsp;&nbsp;&nbsp;&nbsp;${pool.name}`
//             )
//           )
//         }
//       </>
//     ),
//   },
//   {
//     title: 'LTV',
//     dataIndex: 'ltv',
//     width: '16%',

//     defaultSortOrder: 'descend',
//     render: (text, item) => (
//       <>
//       {
//         item.pools.map(pool => (
//           `${pool.ltv}%`
//         ))
//       }
//       </>
//     ),
//   },
//   {
//     title: 'Total supply',
//     width: '16%',
//     dataIndex: 'totalSupply',
//     render: (text, item) => (
//       <>
//       {
//         item.pools.map(pool => (
//           <KpTotal number={pool.totalSupply} />
//         ))
//       }
//       </>
//     ),
//   },
//   {
//     title: 'Supply APR',
//     width: '16%',
//     dataIndex: 'supplyApr',
//     render: (text, item) => (
//       <>
//       {
//         item.pools.map(pool => (
//           `${pool.supplyApr}%`
//         ))
//       }
//       </>
//     ),
//   },
//   {
//     title: 'Total borrow',
//     width: '16%',
//     dataIndex: 'totalBorrow',
//     render: (text, item) => (
//       <>
//       {
//         item.pools.map(pool => (
//           `${pool.totalBorrow}%`
//         ))
//       }
//       </>
//     ),
//   },
//   {
//     title: 'Borrow APR',
//     width: '19%',
//     dataIndex: 'borrowApr',
//     render: (text, item) => (
//       <>
//       {
//         item.pools.map(pool => (
//           `${pool.borrowApr}%`
//         ))
//       }
//       </>
//     ),
//   },
//   {
//     title: <>&ngsp;&ngsp;&ngsp;&ngsp;</>,
//     dataIndex: 'name',

//     // sorter: (a, b) => a.address.length - b.address.length,
//     render: (text) => (
//       <span style={{ opacity: 0 }}>
//         <button
//           type="button"
//           class="ant-table-row-expand-icon ant-table-row-expand-icon-expanded"
//           aria-label="Collapse row"
//         ></button>
//       </span>
//     ),
//   },
// ];
export const childAssetColumns = [
  {
    title: 'Asset name',
    dataIndex: 'name',
    width: '16%',
    dataIndex: 'icon',

    // specify the condition of filtering result
    // here is that finding the name started with `value`
    // sorter: (a, b) => a.name.length - b.name.length,
    render: (text, item) => <KpTotal icon={text} name={item.name} />,

    // render: (text, item) => `${item.name}`,
  },
  {
    title: 'LTV',
    dataIndex: 'ltv',
    width: '16%',
    defaultSortOrder: 'descend',
    // render: (text, item) => `${item.ltv.toFixed(3)}%`,
    render: (text, item) => `${parseFloat(item.ltv).toFixed(3)}`,
  },
  {
    title: 'Total supply',
    width: '16%',
    dataIndex: 'totalSupply',
    render: (text, item) => (
      <KpTotal number={item.totalSupply} name={item.token} />
    ),
  },
  {
    title: 'Supply APR',
    width: '16%',
    dataIndex: 'supplyApr',
    render: (text, item) => `${parseFloat(item.supplyApr).toFixed(3)}%`,
  },
  {
    title: 'Total borrow',
    width: '16%',
    dataIndex: 'totalBorrow',
    render: (text, item) => (
      <KpTotal number={item.totalBorrow} name={item.token} />
    ),
  },
  {
    title: 'Borrow APR',
    width: '19%',
    dataIndex: 'borrowApr',
    render: (text, item) => `${parseFloat(item.borrowApr).toFixed(3)}%`,
  },
  {
    title: <>&ngsp;&ngsp;&ngsp;&ngsp;</>,
    dataIndex: 'name',

    // sorter: (a, b) => a.address.length - b.address.length,
    render: (text) => (
      <span style={{ opacity: 0 }}>
        <button
          type="button"
          class="ant-table-row-expand-icon ant-table-row-expand-icon-expanded"
          aria-label="Collapse row"
        ></button>
      </span>
    ),
  },
];

export const childPoolColumns = [
  {
    title: 'Asset name',
    dataIndex: 'name',
    width: '16%',
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    // sorter: (a, b) => a.name.length - b.name.length,
    render: (text, item) => `${item.name}`,
  },
  {
    title: 'LTV',
    dataIndex: 'ltv',
    width: '16%',
    defaultSortOrder: 'descend',
    // render: (text, item) => `${item.ltv.toFixed(3)}%`,
    render: (text, item) => `${parseFloat(item.ltv).toFixed(3)}`,
  },
  {
    title: 'Total supply',
    width: '16%',
    dataIndex: 'totalSupply',
    render: (text, item) => (
      <KpTotal number={item.totalSupply} name={item.token} />
    ),
  },
  {
    title: 'Supply APR',
    width: '16%',
    dataIndex: 'supplyApr',
    render: (text, item) => `${parseFloat(item.supplyApr).toFixed(3)}%`,
  },
  {
    title: 'Total borrow',
    width: '16%',
    dataIndex: 'totalBorrow',
    render: (text, item) => (
      <KpTotal number={item.totalBorrow} name={item.token} />
    ),
  },
  {
    title: 'Borrow APR',
    width: '19%',
    dataIndex: 'borrowApr',
    render: (text, item) => `${parseFloat(item.borrowApr).toFixed(3)}%`,
  },
  {
    title: <>&ngsp;&ngsp;&ngsp;&ngsp;</>,
    dataIndex: 'name',

    // sorter: (a, b) => a.address.length - b.address.length,
    render: (text) => (
      <span style={{ opacity: 0 }}>
        <button
          type="button"
          class="ant-table-row-expand-icon ant-table-row-expand-icon-expanded"
          aria-label="Collapse row"
        ></button>
      </span>
    ),
  },
];
// export const childData = [
//   {
//     key: '1',
//     name: 'MainPool',
//     age: 32,
//     icon: '/btc.svg',
//     address: 'New York No. 1 Lake Park',
//   },
//   {
//     key: '2',
//     name: 'FoxPool',
//     age: 42,
//     icon: '/bnb.svg',
//     address: 'London No. 1 Lake Park',
//   },
//   {
//     key: '3',
//     name: 'OtherPool',
//     icon: '/dai.svg',
//     age: 32,
//     address: 'Sidney No. 1 Lake Park',
//   },
// ];

//// market pool
export const columnsPool = [
  {
    title: 'Asset',
    width: '16%',
    dataIndex: 'key',
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    sorter: (a, b) => a.key - b.key,
    showSorterTooltip: false,
    render: (text, item) => (
      <span>
        0{item.key} {item.name}
      </span>
    ),
  },
  {
    title: 'LTV',
    width: '16%',
    dataIndex: 'age',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
    showSorterTooltip: false,
    render: (text) => `${text.toFixed(3)}%`,
  },
  {
    title: 'Total Supply',
    width: '16%',
    dataIndex: 'address',
    sorter: (a, b) => a.address.length - b.address.length,
    showSorterTooltip: false,
    render: () => <KpTotal number="1,234" name="BTC" price="$28903.2" />,
  },
  {
    title: 'Supply APR',
    width: '16%',
    dataIndex: 'age',
    sorter: (a, b) => a.address.length - b.address.length,
    showSorterTooltip: false,
    render: (text) => `${text / 10}%`,
  },
  {
    title: 'Total Borrow',
    width: '16%',
    dataIndex: 'address',
    sorter: (a, b) => a.address.length - b.address.length,
    showSorterTooltip: false,
    render: () => <KpTotal number="1,234" name="BTC" price="$28903.2" />,
  },
  {
    width: '19%',
    title: 'Borrow APR',
    dataIndex: 'age',
    sorter: (a, b) => a.address.length - b.address.length,
    showSorterTooltip: false,
    render: (text) => `${text / 10}%`,
  },
  Table.EXPAND_COLUMN,
];
export const dataPool = [
  {
    key: '1',
    name: 'MainPool',
    age: 52,
    icon: '/btc.svg',
    address: 'New York No. 1 Lake Park',
    childData: [
      {
        key: '11',
        name: 'BTC',
        age: 32,
        icon: '/btc.svg',
        address: 'New York No. 1 Lake Park',
      },
      {
        key: '12',
        name: 'BNB',
        age: 42,
        icon: '/bnb.svg',
        address: 'London No. 1 Lake Park',
      },
      {
        key: '13',
        name: 'DAI',
        icon: '/dai.svg',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
      },
      {
        key: '4',
        name: 'ETH',
        icon: '/eth.svg',
        age: 32,
        address: 'London No. 2 Lake Park',
      },
      {
        key: '5',
        name: 'USDA',
        icon: '/usda.svg',
        age: 32,
        address: 'London No. 2 Lake Park',
      },
      {
        key: '6',
        name: 'USDC',
        icon: '/usdc.svg',
        age: 32,
        address: 'London No. 2 Lake Park',
      },
      {
        key: '7',
        name: 'USDH',
        icon: '/usdh.svg',
        age: 32,
        address: 'London No. 2 Lake Park',
      },
      {
        key: '8',
        name: 'USDT',
        age: 32,
        icon: '/usdt.svg',
        address: 'London No. 2 Lake Park',
      },
      {
        key: '9',
        name: 'FOX',
        age: 32,
        icon: '/fox.svg',
        address: 'London No. 2 Lake Park',
      },
    ],
  },
  {
    key: '2',
    name: 'FoxPool',
    age: 42,
    icon: '/bnb.svg',
    address: 'London No. 1 Lake Park',
    childData: [
      {
        key: '6',
        name: 'USDC',
        icon: '/usdc.svg',
        age: 32,
        address: 'London No. 2 Lake Park',
      },
      {
        key: '7',
        name: 'USDH',
        icon: '/usdh.svg',
        age: 32,
        address: 'London No. 2 Lake Park',
      },
      {
        key: '8',
        name: 'USDT',
        age: 32,
        icon: '/usdt.svg',
        address: 'London No. 2 Lake Park',
      },
      {
        key: '9',
        name: 'FOX',
        age: 32,
        icon: '/fox.svg',
        address: 'London No. 2 Lake Park',
      },
    ],
  },
  {
    key: '3',
    name: 'OtherPool',
    age: 42,
    icon: '/bnb.svg',
    address: 'London No. 1 Lake Park',
    childData: [
      {
        key: '7',
        name: 'USDH',
        icon: '/usdh.svg',
        age: 32,
        address: 'London No. 2 Lake Park',
      },
      {
        key: '8',
        name: 'USDT',
        age: 32,
        icon: '/usdt.svg',
        address: 'London No. 2 Lake Park',
      },
      {
        key: '9',
        name: 'FOX',
        age: 32,
        icon: '/fox.svg',
        address: 'London No. 2 Lake Park',
      },
    ],
  },
];
export const childColumnsPool = [
  {
    title: 'Asset',
    width: '16%',
    dataIndex: 'icon',
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    sorter: (a, b) => a.name.length - b.name.length,
    showSorterTooltip: false,
    render: (text, item) => (
      <KpToken icon={text} name={item.name} price="$28903.2" />
    ),
  },
  {
    title: 'LTV',
    width: '16%',
    dataIndex: 'age',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
    showSorterTooltip: false,
    render: (text) => `${text}%`,
  },
  {
    title: 'Total Supply',
    width: '16%',
    dataIndex: 'address',
    sorter: (a, b) => a.address.length - b.address.length,
    showSorterTooltip: false,
    render: (text, item) => (
      <KpTotal number="1,234" name={item.name} price="$28903.2" />
    ),
  },
  {
    title: 'Supply APR',
    width: '16%',
    dataIndex: 'age',
    sorter: (a, b) => a.address.length - b.address.length,
    showSorterTooltip: false,
    render: (text) => `${text / 10}%`,
  },
  {
    title: 'Total Borrow',
    width: '16%',
    dataIndex: 'address',
    sorter: (a, b) => a.address.length - b.address.length,
    showSorterTooltip: false,
    render: (text, item) => (
      <KpTotal number="1,234" name={item.name} price="$28903.2" />
    ),
  },
  {
    width: '19%',
    title: 'Borrow APR',
    dataIndex: 'age',
    sorter: (a, b) => a.address.length - b.address.length,
    showSorterTooltip: false,
    render: (text) => `${text / 10}%`,
  },
  {
    title: <>&ngsp;&ngsp;&ngsp;&ngsp;</>,
    dataIndex: 'age',

    // sorter: (a, b) => a.address.length - b.address.length,
    render: (text) => (
      <span style={{ opacity: 0 }}>
        <button
          type="button"
          class="ant-table-row-expand-icon ant-table-row-expand-icon-expanded"
          aria-label="Collapse row"
        ></button>
      </span>
    ),
  },
];
export const childDataPool = [
  {
    key: '1',
    name: 'MainPool',
    age: 32,
    icon: '/btc.svg',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'FoxPool',
    age: 42,
    icon: '/bnb.svg',
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'OtherPool',
    icon: '/dai.svg',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
];
