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
            <div>
                {/* <form onSubmit = {this.handleSubmit}> */}
                    <label>Username: </label>
                    <input value = {this.state.userName} type="text" name = "userName" onChange={this.handleChange} ></input>
                    <label>Password: </label>
                    <input value = {this.state.passWord} type="text" name = "passWord" onChange={this.handleChange} ></input>
                    <button onClick = {this.handleForm}>Login</button>
                {/* </form> */}
            </div>
        );
    }
}