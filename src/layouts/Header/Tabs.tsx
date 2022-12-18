import React from 'react'
import { history } from "umi";
import { Link } from 'react-router-dom'
export default function Tabs() {
    React.useLayoutEffect(() => {
        if (history.location.pathname.indexOf('pool') > -1) {
            tabsBridge();
        }
    });
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
            <Link to='/transfer' ><label onClick={tabs} className="tab" htmlFor="radio-1">Transfer</label></Link>

            <input type="radio" id="radio-3" name="tabs" />
            <Link to='/pool'><label onClick={tabsBridge} className="tab" htmlFor="radio-3">Pools</label></Link>

            <span className="glider"></span>
        </div>
    )
}
