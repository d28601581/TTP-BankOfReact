import './App.css';
import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import UserProfile from './Component/UserProfile/UserProfile';
import Nav from './Component/Nav/Nav';
import DebtPage from './Component/DebitPage/DebtPage';
import CreditPage from './Component/CreditPage/CreditPage';

export default class App extends Component{
  
  constructor()
  {
    super();
    this.state = 
    {
      users: {
        name: '',
        password: '',
        balance: '',
      },
      
      isLoggedIn: false,
      debt: [],
      cedit: [],
      login: false,
    }
  }

  handleValidation = (username, password) =>
  {
      this.setState({
        users:{
          name: username,
          password: password,
          balance: "1000"
        },
        isLoggedIn: true
      })
      
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
          this.setState({ credit: credit['data']});
        } catch (error) {
          console.error(error);
        } 
  }

  addCredit = (descriptionX, amountX) =>
  {
    var today = Date().toLocaleString()
    
      let c = {
        description: descriptionX,
        amount: amountX,
        date: today
      }
      let creditArray = this.state.credit;
      creditArray.push(c);
  }

  addDebit = (descriptionX, amountX) =>
  {
    var today = Date().toLocaleString()  
    let c = {
        description: descriptionX,
        amount: amountX,
        date: today,
      }
      let debitArray = this.state.debt;
      debitArray.push(c);
  }

  handleLoginNav = () =>
  {
      this.setState({
        login: true
      })
  }

  handleNavAppear = () =>
  {
    this.setState({
      login: false
    })
  }

  render()
  {
    return(
      <Router>
         {
           this.state.login?
           null :
           <div className = "container-fluid" style={{padding: '0'}}>
              <div className = "row">
                <div className = "col">
                  <Nav handleLoginNav = {this.handleLoginNav} logOut = {this.state.isLoggedIn} logOutFunction = {this.handleSignOut} debtArray = {this.retrieveDebt} creditArray = {this.retrieveCredit}/>
                </div>
              </div>
          </div>
         }
            <Switch>
                <Route exact path="/"><Home/></Route>
                <Route exact path="/login"><Login handleNavAppear = {this.handleNavAppear} validHandler = {this.handleValidation} isValid = {this.state.isValid}/></Route>
                <Route exact path="/userprofile"><UserProfile money = {this.state.users['balance']} name = {this.state.users.name}/></Route>
                <Route exact path="/debitpage" ><DebtPage money = {this.state.users['balance']} addDebit = {this.addDebit} array = {this.state.debt}/></Route>
                <Route exact path="/creditpage"><CreditPage money = {this.state.users['balance']} addCredit =  {this.addCredit} array = {this.state.credit}/></Route>
            </Switch>
            {
              this.state.isLoggedIn? 
              <Redirect to='/userprofile'/> :
              <Redirect to = '/'/>
            }
      </Router>
    )
  }
}