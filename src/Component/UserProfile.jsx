import { render } from '@testing-library/react';
import React, { Component } from 'react';

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
                <h1>{this.state.accountBalance} dollars </h1>
                <h1>Member since: {this.state.currentUser.memberSince}</h1>
            </div>
        )
    }
}