import { DownOutlined } from '@ant-design/icons';
import { useState,useEffect } from 'react';
import styles from './index.less';

export default function (props: any) {
    const { title, choose, selectToken, selectChain, currentToken, currentChain,max,chooseToken,onMax,defaultValue,onChange } = props;
    const [active, setActive] = useState(false);
    const [value,setValue]=useState(defaultValue);
    const handleChange=()=>{
        onMax&&onMax()
        setValue("0.9506");
    }
    useEffect(()=>{setValue(defaultValue)},[defaultValue])
    return <div className='text-gray-4 flex flex-column gap-2' >
        <div className={`flex flex-between flex-align-center`}>
            <div>{title}</div>
            <div className={`flex flex-align-center gap-2 fw-bold ${choose && 'token-hover'}`}>
                <img src={currentChain?.icon} width="16" />
                {
                    choose && <div onClick={selectChain}>{currentChain?.name} <DownOutlined /></div>
                    ||
                    <div>{currentChain?.name} </div>
                }
            </div>
        </div>
        <div className={`${styles.input} flex flex-column gap-2`} style={{ border: active && '1px solid #ff5c28' || '1px solid rgba(0,0,0,0)' }}>
            <div className=' flex flex-between  gap-2'>
                <div style={{padding:'1px 8px'}} className={`flex flex-align-center gap-2 fw-bold ${chooseToken&&'token-hover'}`} onClick={chooseToken&&selectToken}>
                    <img src={currentToken?.icon} width="25" />
                    <span>{currentToken?.name}</span>
                    {chooseToken&&<DownOutlined />}
                </div>

                <input value={value} onChange={e=>{setValue(e.target.value);onChange(e.target.value)}} onFocus={() => setActive(true)} onBlur={() => setActive(false)} placeholder='0.0' className='flex-auto' style={{
                    fontSize: '20px',
                    width: '100%',
                    color: '#fff',
                    fontWeight: 'bold'
                }} />
            </div>

            <div className='flex flex-between  gap-2'>
                <div>Expect to receive: 0.9506 {currentToken?.name}</div>
                {max&&<span className='max' onClick={handleChange}>Max</span>}
            </div>
        </div>

    </div>
}