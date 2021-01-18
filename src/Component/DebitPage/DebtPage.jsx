import React, {Component} from 'react';
import './DebitPage.css';
import AccountAmount from '../accountAmount';

export default class DebitPage extends Component
{
    constructor(){
        super();

        this.state = 
        {
            description: '',
            amount: 0,
            date: '',
            isClicked: false
        }
    }

    addDebit = () =>
    {
        this.setState({
            isClicked: true
        })
        
    }

    handleDebitChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = () =>{
        if(this.state.amount <= 0){
            alert('The amount enter must be greater than 0');
        }   else {
            this.props.addDebit(this.state.description, this.state.amount, new Date());
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
            <div className = "debtPage">
            
                <button onClick = {this.addDebit}>Add Debit</button>
                {
                    this.state.isClicked?
                    <div className= "inputField">
                        <label>Description:</label>
                        <input value = {this.state.description} type ="text" name = "description" onChange = {this.handleDebitChange}></input>
                        <label>Amount:</label>
                        <input value = {this.state.amount} type ="number" name = "amount" onChange = {this.handleDebitChange}></input>
                        <br/>
                        <div>                         
                                <button className = "button" onClick = {this.handleSubmit}>Add</button>
                                <button className = "button" onClick = {this.handleCancer}>Cancel</button>
                        </div>
                    </div>  
                    : null
                }

                <div className = "Balance">
                    <AccountAmount money=  {this.props.money}/>
                </div>
                
                {
                    this.props.array?
               
                <table className = "statement">
                    {
                        this.props.array.map((index) => {
                            
                            return(
                                <tr key = "row">
                                    <td>{index.description}</td>
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

