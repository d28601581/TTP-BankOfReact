import './App.css';
import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import Home from './Component/Home';
import Login from './Component/Login';
import UserProfile from './Component/UserProfile';
import Nav from './Component/Nav';
import DebtPage from './Component/DebtPage';
import CreditPage from './Component/CreditPage';

export default class App extends Component{
  
  constructor()
  {
    super();
    this.state = 
    {
      users: {
        name: 'Ben',
        password: '123',
      },
      isValid: false,
      isLoggedIn: false,
      debt: [],
      cedit: []
    }
  }

  handleValidation = (username, password) =>
  {
      let user = this.state.users;
      if(user.name === username && user.password === password)
      {
        console.log("here");  
        this.setState({
            isValid: true,
            isLoggedIn: true
          })
      }else{
          this.setState({
            isValid: false,
            isLoggedIn: false
          })
      }
  }

  handleSignOut = () =>
  {
      this.setState({
        isLoggedIn: false
      })
  }

  retrieveDebt = async () =>
  {
      let url = "https://moj-api.herokuapp.com/debits";
      try 
        {
          let debt = await axios.get(url);
          console.log(debt['data']);
          this.setState({ debt: debt['data']});
        } catch (error) {
          console.error(error);
        } 
  }

  retrieveCredit = async () =>
  {
      let url = "https://moj-api.herokuapp.com/credits";
      try 
        {
          let credit = await axios.get(url);
          console.log(credit['data']);
          this.setState({ credit: credit['data']});
        } catch (error) {
          console.error(error);
        } 
  }

  addCredit = () =>{

  }

  addDebit = () =>{

  }


  render()
  {
    return(
      <Router>
         <div className = "container" fluid>
           <div className = "row">
              <div className = "col">
                <Nav logOut = {this.state.isLoggedIn} logOutFunction = {this.handleSignOut}/>
              </div>
           </div>
        </div>
            <switch>
                <Route exact path="/"><Home/></Route>
                <Route exact path="/login"><Login validHandler = {this.handleValidation} isValid = {this.state.isValid}/></Route>
                <Route exact path="/userprofile"><UserProfile/></Route>
                <Route exact path="/debitpage" ><DebtPage debtArray = {this.retrieveDebt} array = {this.state.debt}/></Route>
                <Route exact path="/creditpage"><CreditPage creditArray = {this.retrieveCredit} array = {this.state.credit}/></Route>
            </switch>
            {
              this.state.isLoggedIn? 
              <Redirect to='/userprofile'/> :
              <Redirect to = '/'/>
            }
      </Router>
    )
  }
}