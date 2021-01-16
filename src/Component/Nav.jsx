import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Nav extends Component{
    render()
    {
        return(
            <div>
                <h1>Bank Of React</h1>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    {this.props.logOut? 
                    <>
                        <li><Link to="/creditpage">Credit</Link></li>
                        <li><Link to="/debitpage">Debit</Link></li>
                        <li><button onClick = {this.props.logOutFunction}>Sign Out</button></li>
                    </>: null
                    }
                   
                </ul>
            </div>
        );
    }
}