import React, { Component } from 'react';

export default class accountBalance extends Component
{
    
    render()
    {
        return(
            <div>
                <h1>{`Balance: ${this.props.money}`}</h1>
            </div>
        )
    }
}