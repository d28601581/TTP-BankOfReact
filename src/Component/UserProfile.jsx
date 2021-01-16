import { render } from '@testing-library/react';
import React, { Component } from 'react';
import AccountAmount from './accountAmount';

export default class UserProfile extends Component
{
    constructor(){
        super();
        this.state = {
            accountBalance: 100,
            currentUser: {
                userName: 'bob_loblaw',
                memberSince: '08/23/99',
            }
        }
    }

    render()
    {
        return(
            <div>
                <AccountAmount money = {this.state.accountBalance}/>
            </div>
        )
    }
}