import React from 'react'
import Supplier from './supplier';
import Transport from './transport';
import Asset from './asset';
import Data from './data';
import Employee from './employee';
import Markert from './markert';
import Storage from './storage';


function Nav() {
    return (
        <div>
        <nav>
        <h3>TEMBO MANAGER</h3>
        <Supplier/>
        <Transport/>
        <Asset/>
        <Data/>
        <Employee/>
        <Markert/>
        <Storage/>
        </nav>
        </div>
    )
}

export default Nav

