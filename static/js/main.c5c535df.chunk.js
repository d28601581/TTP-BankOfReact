(this["webpackJsonpbank-of-react"]=this["webpackJsonpbank-of-react"]||[]).push([[0],{156:function(e,t,n){},157:function(e,t,n){},176:function(e,t,n){},470:function(e,t,n){},471:function(e,t,n){},479:function(e,t,n){},480:function(e,t,n){},481:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(2),c=n.n(s),i=n(25),r=n.n(i),l=(n(156),n(53)),d=n.n(l),o=n(89),j=n(8),h=n(9),b=n(11),u=n(10),m=(n(157),n(26)),O=n(3),p=(n(158),n(90)),x=n.n(p),v=n(41),g=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(j.a)(this,n),(e=t.call(this)).handleSubmit=function(e){e.preventdefault()},e.handleForm=function(){e.props.validHandler(e.state.userName,e.state.passWord),e.props.handleNavAppear(),e.setState({userName:"",passWord:""})},e.handleChange=function(t){e.setState(Object(v.a)({},t.target.name,t.target.value))},e.state={userName:"",passWord:""},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col",children:Object(a.jsx)("form",{className:"loginBox",onSubmit:this.handleSubmit,children:Object(a.jsxs)("div",{className:"loginBoxField",children:[Object(a.jsx)("label",{className:!0,children:"Username: "}),Object(a.jsx)("input",{value:this.state.userName,type:"text",name:"userName",onChange:this.handleChange}),Object(a.jsx)("label",{children:"Password: "}),Object(a.jsx)("input",{value:this.state.passWord,type:"text",name:"passWord",onChange:this.handleChange}),Object(a.jsx)("button",{className:"btn",onClick:this.handleForm,children:"Login"})]})})})})})}}]),n}(s.Component);n(176);function f(){return Object(a.jsx)("div",{className:"homePage",children:Object(a.jsx)("h1",{children:"Welcome to Bank Of React"})})}n(482);var C=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"Balance: ".concat(this.props.money)})})}}]),n}(s.Component),N=(n(470),function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).state={accountBalance:e.money,currentUser:{userName:e.name,memberSince:""}},a}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"userHomePage",children:Object(a.jsxs)("div",{className:"userInformation",children:[Object(a.jsx)("h1",{children:"Hello, ".concat(this.state.currentUser.userName)}),Object(a.jsx)(C,{money:this.state.accountBalance})]})})}}]),n}(s.Component)),k=(n(471),function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("nav",{className:"bankNav",children:[Object(a.jsx)("div",{className:"Logo",children:Object(a.jsx)("h1",{children:"Bank Of React"})}),Object(a.jsx)("ul",{className:"menu",children:this.props.logOut?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("li",{children:Object(a.jsx)(m.b,{className:"link",to:"/userProfile",children:"Home"})}),Object(a.jsx)("li",{children:Object(a.jsx)(m.b,{className:"link",to:"/creditpage",children:"Credit"})}),Object(a.jsx)("li",{children:Object(a.jsx)(m.b,{className:"link",to:"/debitpage",children:"Debit"})}),Object(a.jsx)("li",{children:Object(a.jsx)(m.b,{className:"link",to:"/",onClick:this.props.logOutFunction,children:"Sign Out"})})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("li",{children:Object(a.jsx)(m.b,{className:"link",to:"/",children:"Home"})}),Object(a.jsxs)("li",{children:[Object(a.jsx)(m.b,{onClick:this.props.handleLoginNav,className:"link",to:"/login",children:"Login"})," "]})]})})]})}}]),n}(s.Component)),y=(n(479),function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(j.a)(this,n),(e=t.call(this)).addDebit=function(){e.setState({isClicked:!0})},e.handleDebitChange=function(t){e.setState(Object(v.a)({},t.target.name,t.target.value))},e.handleSubmit=function(){e.state.amount<=0?alert("The amount enter must be greater than 0"):(e.props.addDebit(e.state.description,e.state.amount,new Date),e.setState({isClicked:!1}))},e.handleCancer=function(){e.setState({isClicked:!1})},e.state={description:"",amount:"",date:"",isClicked:!1},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"debtPage",children:[Object(a.jsx)("button",{onClick:this.addDebit,children:"Add Debit"}),this.state.isClicked?Object(a.jsxs)("div",{className:"inputField",children:[Object(a.jsx)("label",{children:"Description:"}),Object(a.jsx)("input",{value:this.state.description,type:"text",name:"description",onChange:this.handleDebitChange}),Object(a.jsx)("label",{children:"Amount:"}),Object(a.jsx)("input",{value:this.state.amount,type:"number",name:"amount",onChange:this.handleDebitChange}),Object(a.jsx)("br",{}),Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{className:"button",onClick:this.handleSubmit,children:"Add"}),Object(a.jsx)("button",{className:"button",onClick:this.handleCancer,children:"Cancel"})]})]}):null,Object(a.jsx)("div",{className:"Balance",children:Object(a.jsx)(C,{money:this.props.money})}),this.props.array?Object(a.jsx)("table",{className:"statement",children:this.props.array.map((function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:e.description}),Object(a.jsx)("td",{children:"$".concat(e.amount)}),Object(a.jsx)("td",{children:e.date})]},"row")}))}):null]})}}]),n}(s.Component)),S=(n(480),function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(j.a)(this,n),(e=t.call(this)).addCredit=function(){e.setState({isClicked:!0})},e.handleCreditChange=function(t){e.setState(Object(v.a)({},t.target.name,t.target.value))},e.handleSubmit=function(){e.state.amount<=0?alert("The amount enter must be greater than 0"):(e.props.addCredit(e.state.description,e.state.amount,new Date),e.setState({isClicked:!1}))},e.handleCancer=function(){e.setState({isClicked:!1})},e.state={description:"",amount:"",date:"",isClicked:!1},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"creditPage",children:[Object(a.jsx)("button",{onClick:this.addCredit,children:"Add Credit"}),this.state.isClicked?Object(a.jsxs)("div",{className:"inputField",children:[Object(a.jsx)("label",{children:"Description:"}),Object(a.jsx)("input",{value:this.state.description,type:"text",name:"description",onChange:this.handleCreditChange}),Object(a.jsx)("label",{children:"Amount:"}),Object(a.jsx)("input",{value:this.state.amount,type:"number",name:"amount",onChange:this.handleCreditChange}),Object(a.jsx)("br",{}),Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{className:"button",onClick:this.handleSubmit,children:"Add"}),Object(a.jsx)("button",{className:"button",onClick:this.handleCancer,children:"Cancel"})]}),"                    "]}):null,Object(a.jsx)("div",{className:"Balance",children:Object(a.jsx)(C,{money:this.props.money})}),this.props.array?Object(a.jsx)("table",{className:"statement",children:this.props.array.map((function(e,t){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:Object(a.jsx)("div",{className:"items",children:e.description})}),Object(a.jsx)("td",{children:"$".concat(e.amount)}),Object(a.jsx)("td",{children:e.date})]},"row".concat(t+1))}))}):null]})}}]),n}(s.Component)),D=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(j.a)(this,n),(e=t.call(this)).handleValidation=function(t,n){e.setState({users:{name:t,password:n,balance:"1000"},isLoggedIn:!0})},e.handleSignOut=function(){e.setState({isLoggedIn:!1})},e.retrieveDebt=Object(o.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://moj-api.herokuapp.com/debits",t.prev=1,t.next=4,x.a.get("https://moj-api.herokuapp.com/debits");case 4:n=t.sent,console.log(n.data),e.setState({debt:n.data}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])}))),e.retrieveCredit=Object(o.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://moj-api.herokuapp.com/credits",t.prev=1,t.next=4,x.a.get("https://moj-api.herokuapp.com/credits");case 4:n=t.sent,e.setState({credit:n.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])}))),e.addCredit=function(t,n){var a={description:t,amount:n,date:Date().toLocaleString()};e.state.credit.push(a)},e.addDebit=function(t,n){var a={description:t,amount:n,date:Date().toLocaleString()};e.state.debt.push(a)},e.handleLoginNav=function(){e.setState({login:!0})},e.handleNavAppear=function(){e.setState({login:!1})},e.state={users:{name:"",password:"",balance:""},isLoggedIn:!1,debt:[],cedit:[],login:!1},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.retrieveCredit(),this.retrieveDebt()}},{key:"render",value:function(){return Object(a.jsxs)(m.a,{children:[this.state.login?null:Object(a.jsx)("div",{className:"container-fluid",style:{padding:"0"},children:Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col",children:Object(a.jsx)(k,{handleLoginNav:this.handleLoginNav,logOut:this.state.isLoggedIn,logOutFunction:this.handleSignOut,debtArray:this.retrieveDebt,creditArray:this.retrieveCredit})})})}),Object(a.jsxs)(O.d,{children:[Object(a.jsx)(O.b,{exact:!0,path:"/",children:Object(a.jsx)(f,{})}),Object(a.jsx)(O.b,{exact:!0,path:"/login",children:Object(a.jsx)(g,{handleNavAppear:this.handleNavAppear,validHandler:this.handleValidation,isValid:this.state.isValid})}),Object(a.jsx)(O.b,{exact:!0,path:"/userprofile",children:Object(a.jsx)(N,{money:this.state.users.balance,name:this.state.users.name})}),Object(a.jsx)(O.b,{exact:!0,path:"/debitpage",children:Object(a.jsx)(y,{money:this.state.users.balance,addDebit:this.addDebit,array:this.state.debt})}),Object(a.jsx)(O.b,{exact:!0,path:"/creditpage",children:Object(a.jsx)(S,{money:this.state.users.balance,addCredit:this.addCredit,array:this.state.credit})})]}),this.state.isLoggedIn?Object(a.jsx)(O.a,{to:"/userprofile"}):Object(a.jsx)(O.a,{to:"/"})]})}}]),n}(s.Component),L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,483)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};r.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(D,{})}),document.getElementById("root")),L()}},[[481,1,2]]]);
//# sourceMappingURL=main.c5c535df.chunk.js.map