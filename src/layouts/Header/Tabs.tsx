import React from 'react'
// import '../pages/less/Tabs.less'
import { Link } from 'react-router-dom'
export default function Tabs() {
    const tabsRoll = function () {
        var tab = document.getElementsByClassName('glider');

        tab[0].style.transform = 'translateX(200%)'
    };
    const tabs = function () {
        var tab = document.getElementsByClassName('glider');

        tab[0].style.transform = 'translateX(0)'
    }
    const tabsBridge = function () {
        var tab = document.getElementsByClassName('glider');

        tab[0].style.transform = 'translateX(100%)'
    }

    return (
        <div className="tabs">
            <input type="radio" id="radio-1" name="tabs" checked />
            <label onClick={tabs} className="tab" htmlFor="radio-1"><Link to='/message' >Message</Link></label>

            <input type="radio" id="radio-3" name="tabs" />
            <label  onClick={tabsBridge} className="tab" htmlFor="radio-3"><Link to='/exchange'>Exchange</Link></label>

            <input type="radio" id="radio-2" name="tabs" />
            <label  onClick={tabsRoll} className="tab" htmlFor="radio-2"><Link to='/pool'>Pool</Link></label>

            <span className="glider"></span>
        </div>
    )
}
