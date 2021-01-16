import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './nav.css';

export default class Nav extends Component{
    render()
    {
        return(
            <nav className = "bankNav">
                <div className = "Logo">
                    <h1>Bank Of React</h1>
                </div>
                <ul className = "menu">
                    
                    {this.props.logOut? 
                    <>
                        <li><Link className = "link" to="/userProfile">Home</Link></li>
                        <li><Link onClick = {this.props.creditArray} className = "link" to="/creditpage">Credit</Link></li>
                        <li><Link onClick = {this.props.debtArray} className = "link" to="/debitpage">Debit</Link></li>
                        <li><Link className = "link" to="/" onClick = {this.props.logOutFunction}>Sign Out</Link></li>
                    </>: 
                        <>
                        <li><Link className = "link" to="/">Home</Link></li>
                        <li><Link onClick = {this.props.handleLoginNav} className = "link" to="/login">Login</Link> </li>
                        </>
                    }
                   
                </ul>
            </nav>
        );
    }
}