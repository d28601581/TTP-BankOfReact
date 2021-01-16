import React, {Component} from 'react';


export default class Login extends Component{
    
    constructor()
    {
        super();

        this.state = {
            userName: '',
            passWord: '',
        }
    }

    handleSubmit = (event) =>{
        event.preventdefault()

    }
    
    handleForm = () =>
    {
        this.props.validHandler(this.state.userName, this.state.passWord);
        this.setState({
            userName: '',
            passWord: '',
        })
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    render()
    {
        return(
            <div className = "container">
                <div className = "row">
                   <div className = "col">
                        <form className = "loginBox" onSubmit = {this.handleSubmit}>
                            <div className = "loginBoxField">
                                <label className>Username: </label>
                                <input value = {this.state.userName} type="text" name = "userName" onChange={this.handleChange} ></input>
                                <label>Password: </label>
                                <input value = {this.state.passWord} type="text" name = "passWord" onChange={this.handleChange} ></input>
                                <button className = "btn" onClick = {this.handleForm}>Login</button>
                            </div>
                        </form>
                   </div>
                </div>
            </div>
        );
    }
}