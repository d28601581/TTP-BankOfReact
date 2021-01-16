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
            amount: '',
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
        
        this.props.addCredit(this.state.description, this.state.amount, new Date());
        
        this.setState({
            isClicked: false
        })
    }
    
    render()
    {
        return(
            <div className = "debitPage">
                <button onClick = {this.addCredit}>Add Credit</button>
                {
                    this.state.isClicked?
                    <div className= "inputField">
                        <label>Description:</label>
                        <input value = {this.state.description} type ="text" name = "description" onChange = {this.handleCreditChange}></input>
                        <label>Amount:</label>
                        <input value = {this.state.amount} type ="text" name = "amount" onChange = {this.handleCreditChange}></input>
                        <button className = "Add" onClick = {this.handleSubmit}>Add</button>
                    </div> 
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