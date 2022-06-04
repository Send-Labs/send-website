import React from 'react'
import '../pages/less/Tabs.less'
import { Link } from 'react-router-dom'
export default function Tabs() {
  const tabsRoll = function () {
    var tab = document.getElementsByClassName('glider');

    tab[0].style.transform='translateX(100%)'
  };
  const tabs = function (){
    var tab = document.getElementsByClassName('glider');

    tab[0].style.transform='translateX(0)'
  }
  return (
    <div class="container">
        <div class="tabs">
            <input type="radio" id="radio-1" name="tabs" checked />
            <label class="tab" for="radio-1"><Link to='/transfer' onClick={tabs}>Transfer</Link></label>
            
            <input type="radio" id="radio-2" name="tabs" />
            <label class="tab" for="radio-2"><Link to='/pool' onClick={tabsRoll}>Pool</Link></label>

            <span class="glider"></span>
        </div>
    </div>
  )
}