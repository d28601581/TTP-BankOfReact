import React, {Component} from 'react';

export default class CreditPage extends Component
{
    render()
    {
        return(
            <div>
                <button onClick={this.props.creditArray}>Credit</button>
                {
                    this.props.array?
                    this.props.array.map((index) => {
                        return(
                        <div>
                            <p>{index.description}</p>
                            <p>{index.amount}</p>
                            <p>{index.date}</p>
                        </div>);
                    }): null
                }
            </div>
        )
    }
}