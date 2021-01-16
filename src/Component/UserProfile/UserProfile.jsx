import { render } from '@testing-library/react';
import React, { Component } from 'react';
import AccountAmount from '../accountAmount';
import './UserProfile.css';

export default class UserProfile extends Component
{
    constructor(props){
        super(props);
        this.state = {
            accountBalance: props.money,
            currentUser: {
                userName: props.name,
                memberSince: '',
            }
        }
    }

    render()
    {
        return(
            <div className = "userHomePage">
                <div className = "userInformation">
                    <h1>{`Hello, ${this.state.currentUser.userName}`}</h1>
        
                    <AccountAmount money = {this.state.accountBalance}/>
                </div>
            </div>
        )
    }
}