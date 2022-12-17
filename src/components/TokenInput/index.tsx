import { DownOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';
import { useState } from 'react';
import styles from './index.less';

export default function (props: any) {
    const menu = () => {
        return <div className={styles.tokenlist}>

            <div className={`${styles.item} flex flex-align-center gap-2`}>                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><circle cx="12" cy="12" r="12" fill="#F3BA2F"></circle><path d="M8.326 7.144 12.026 5l3.7 2.144-1.36.793-2.34-1.353-2.34 1.353-1.36-.793Zm7.4 2.705-1.36-.792-2.34 1.352-2.34-1.352-1.36.792v1.584l2.34 1.352v2.705l1.36.792 1.36-.792v-2.705l2.34-1.352V9.85Zm0 4.288v-1.584l-1.36.792v1.585l1.36-.793Zm.966.56-2.34 1.353v1.584l3.7-2.144V11.2l-1.36.792v2.705Zm-1.36-6.2 1.36.792v1.584l1.36-.792V8.497l-1.36-.793-1.36.793Zm-4.666 8.126v1.585l1.36.792 1.36-.792v-1.585l-1.36.793-1.36-.793Zm-2.34-2.486 1.36.793v-1.585l-1.36-.792v1.584Zm2.34-5.64 1.36.792 1.36-.792-1.36-.793-1.36.793Zm-3.306.792 1.36-.792-1.36-.793L6 8.497v1.584l1.36.792V9.29Zm0 2.704L6 11.201v4.289l3.7 2.144V16.05l-2.34-1.352v-2.705Z" fill="#fff"></path></svg>
                BNB
            </div>
            <div className={`${styles.item} flex flex-align-center gap-2`}>                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><circle cx="12" cy="12" r="12" fill="#F3BA2F"></circle><path d="M8.326 7.144 12.026 5l3.7 2.144-1.36.793-2.34-1.353-2.34 1.353-1.36-.793Zm7.4 2.705-1.36-.792-2.34 1.352-2.34-1.352-1.36.792v1.584l2.34 1.352v2.705l1.36.792 1.36-.792v-2.705l2.34-1.352V9.85Zm0 4.288v-1.584l-1.36.792v1.585l1.36-.793Zm.966.56-2.34 1.353v1.584l3.7-2.144V11.2l-1.36.792v2.705Zm-1.36-6.2 1.36.792v1.584l1.36-.792V8.497l-1.36-.793-1.36.793Zm-4.666 8.126v1.585l1.36.792 1.36-.792v-1.585l-1.36.793-1.36-.793Zm-2.34-2.486 1.36.793v-1.585l-1.36-.792v1.584Zm2.34-5.64 1.36.792 1.36-.792-1.36-.793-1.36.793Zm-3.306.792 1.36-.792-1.36-.793L6 8.497v1.584l1.36.792V9.29Zm0 2.704L6 11.201v4.289l3.7 2.144V16.05l-2.34-1.352v-2.705Z" fill="#fff"></path></svg>
                BNB
            </div> <div className={`${styles.item} flex flex-align-center gap-2`}>                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><circle cx="12" cy="12" r="12" fill="#F3BA2F"></circle><path d="M8.326 7.144 12.026 5l3.7 2.144-1.36.793-2.34-1.353-2.34 1.353-1.36-.793Zm7.4 2.705-1.36-.792-2.34 1.352-2.34-1.352-1.36.792v1.584l2.34 1.352v2.705l1.36.792 1.36-.792v-2.705l2.34-1.352V9.85Zm0 4.288v-1.584l-1.36.792v1.585l1.36-.793Zm.966.56-2.34 1.353v1.584l3.7-2.144V11.2l-1.36.792v2.705Zm-1.36-6.2 1.36.792v1.584l1.36-.792V8.497l-1.36-.793-1.36.793Zm-4.666 8.126v1.585l1.36.792 1.36-.792v-1.585l-1.36.793-1.36-.793Zm-2.34-2.486 1.36.793v-1.585l-1.36-.792v1.584Zm2.34-5.64 1.36.792 1.36-.792-1.36-.793-1.36.793Zm-3.306.792 1.36-.792-1.36-.793L6 8.497v1.584l1.36.792V9.29Zm0 2.704L6 11.201v4.289l3.7 2.144V16.05l-2.34-1.352v-2.705Z" fill="#fff"></path></svg>
                BNB
            </div>

        </div>
    }
    const { title, choose, selectToken, selectChain, currentToken, currentChain,max,chooseToken } = props;
    const [active, setActive] = useState(false);
    return <div className='text-gray-4 flex flex-column gap-2' >
        <div className={`flex flex-between flex-align-center`}>
            <div>{title}</div>
            <div className={`flex flex-align-center gap-2 fw-bold ${choose && 'token-hover'}`}>
                <img src={currentChain.icon} width="16" />
                {
                    choose && <div onClick={selectChain}>{currentChain.symbol} <DownOutlined /></div>
                    ||
                    <div>{currentChain.symbol} </div>
                }
            </div>
        </div>
        <div className={`${styles.input} flex flex-column gap-2`} style={{ border: active && '1px solid #ff5c28' || '1px solid rgba(0,0,0,0)' }}>
            <div className=' flex flex-between  gap-2'>
                <div className={`flex flex-align-center gap-2 fw-bold ${chooseToken&&'token-hover'}`} onClick={chooseToken&&selectToken}>
                    <img src={currentToken.icon} width="25" />
                    <span>{currentToken.name}</span>
                    {chooseToken&&<DownOutlined />}
                </div>

                <input onFocus={() => setActive(true)} onBlur={() => setActive(false)} placeholder='0.0' className='flex-auto' style={{
                    fontSize: '20px',
                    width: '100%',
                    color: '#fff',
                    fontWeight: 'bold'
                }} />
            </div>

            <div className='flex flex-between  gap-2'>
                <div>Balance: 0.9506 {currentToken.name}</div>
                {max&&<span className='max'>Max</span>}
            </div>
        </div>

    </div>
}