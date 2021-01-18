import React, {Component} from 'react';
import AccountAmount from '../accountAmount';
import './CreditPage.css';

export default class CreditPage extends Component
{
    constructor()
    {
        super();

        this.state = 
        {
            description: '',
            amount: 0,
            date: '',
            isClicked: false
        }
    }

    addCredit = () =>
    {
        this.setState({
            isClicked: true
        })
        
    }

    handleCreditChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = () =>{
        if(this.state.amount <= 0){
            alert('The amount enter must be greater than 0');
        }   else {
            this.props.addCredit(this.state.description, this.state.amount, new Date());
            this.setState({
                isClicked: false
            })
        }
    }

    handleCancer = () => {
        this.setState({
            isClicked: false
        })
    }
    
    render()
    {
        return(
            <div className = "creditPage">
                <button onClick = {this.addCredit}>Add Credit</button>
                {
                    this.state.isClicked?
                    <div className= "inputField">
                        <label>Description:</label>
                        <input value = {this.state.description} type ="text" name = "description" onChange = {this.handleCreditChange}></input>
                        <label>Amount:</label>
                        <input value = {this.state.amount} type ="number" name = "amount" onChange = {this.handleCreditChange}></input>
                        <br/>
                        <div>                         
                                <button className = "button" onClick = {this.handleSubmit}>Add</button>
                                <button className = "button" onClick = {this.handleCancer}>Cancel</button>
                        </div>                    </div> 
                    : null
                }
                <div className = "Balance">
                    <AccountAmount money=  {this.props.money}/>
                </div>
                {
                    this.props.array?
                
                        <table  className = "statement">
                            {
                                this.props.array.map((index, row) => {

                                    return(
                                        <tr key = {`row${row+1}`}>
                                            <td><div className = "items">{index.description}</div></td>
                                            <td>{`$${index.amount}`}</td>
                                            <td>{index.date}</td>

                                        </tr>
                                    )
                                    })
                            }

                        </table>
                    : null
                }
            </div>
            
        )
    }
}