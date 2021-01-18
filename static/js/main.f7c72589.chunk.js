(this["webpackJsonpbank-of-react"]=this["webpackJsonpbank-of-react"]||[]).push([[0],{157:function(e,t,a){},158:function(e,t,a){},177:function(e,t,a){},471:function(e,t,a){},472:function(e,t,a){},480:function(e,t,a){},481:function(e,t,a){},482:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(2),s=a.n(c),i=a(25),r=a.n(i),l=(a(157),a(89)),d=a(53),o=a.n(d),h=a(90),j=a(8),u=a(9),b=a(11),p=a(10),m=(a(158),a(26)),O=a(3),x=(a(159),a(91)),v=a.n(x),g=a(32),f=function(e){Object(b.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(j.a)(this,a),(e=t.call(this)).handleSubmit=function(e){e.preventdefault()},e.handleForm=function(){e.props.validHandler(e.state.userName,e.state.passWord),e.props.handleNavAppear(),e.setState({userName:"",passWord:""})},e.handleChange=function(t){e.setState(Object(g.a)({},t.target.name,t.target.value))},e.state={userName:"",passWord:""},e}return Object(u.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col",children:Object(n.jsx)("form",{className:"loginBox",onSubmit:this.handleSubmit,children:Object(n.jsxs)("div",{className:"loginBoxField",children:[Object(n.jsx)("label",{className:!0,children:"Username: "}),Object(n.jsx)("input",{value:this.state.userName,type:"text",name:"userName",onChange:this.handleChange}),Object(n.jsx)("label",{children:"Password: "}),Object(n.jsx)("input",{value:this.state.passWord,type:"text",name:"passWord",onChange:this.handleChange}),Object(n.jsx)("button",{className:"btn",onClick:this.handleForm,children:"Login"})]})})})})})}}]),a}(c.Component);a(177);function C(){return Object(n.jsx)("div",{className:"homePage",children:Object(n.jsx)("h1",{children:"Welcome to Bank Of React"})})}a(483);var N=function(e){Object(b.a)(a,e);var t=Object(p.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:"Balance: ".concat(this.props.money)})})}}]),a}(c.Component),k=(a(471),function(e){Object(b.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).state={accountBalance:e.money,currentUser:{userName:e.name,memberSince:""}},n}return Object(u.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"userHomePage",children:Object(n.jsxs)("div",{className:"userInformation",children:[Object(n.jsx)("h1",{children:"Hello, ".concat(this.state.currentUser.userName)}),Object(n.jsx)(N,{money:this.state.accountBalance})]})})}}]),a}(c.Component)),y=(a(472),function(e){Object(b.a)(a,e);var t=Object(p.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("nav",{className:"bankNav",children:[Object(n.jsx)("div",{className:"Logo",children:Object(n.jsx)("h1",{children:"Bank Of React"})}),Object(n.jsx)("ul",{className:"menu",children:this.props.logOut?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("li",{children:Object(n.jsx)(m.b,{className:"link",to:"/userProfile",children:"Home"})}),Object(n.jsx)("li",{children:Object(n.jsx)(m.b,{className:"link",to:"/creditpage",children:"Credit"})}),Object(n.jsx)("li",{children:Object(n.jsx)(m.b,{className:"link",to:"/debitpage",children:"Debit"})}),Object(n.jsx)("li",{children:Object(n.jsx)(m.b,{className:"link",to:"/",onClick:this.props.logOutFunction,children:"Sign Out"})})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("li",{children:Object(n.jsx)(m.b,{className:"link",to:"/",children:"Home"})}),Object(n.jsxs)("li",{children:[Object(n.jsx)(m.b,{onClick:this.props.handleLoginNav,className:"link",to:"/login",children:"Login"})," "]})]})})]})}}]),a}(c.Component)),S=(a(480),function(e){Object(b.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(j.a)(this,a),(e=t.call(this)).addDebit=function(){e.setState({isClicked:!0})},e.handleDebitChange=function(t){e.setState(Object(g.a)({},t.target.name,t.target.value))},e.handleSubmit=function(){e.state.amount<=0?alert("The amount enter must be greater than 0"):(e.props.addDebit(e.state.description,e.state.amount,new Date),e.setState({isClicked:!1})),e.handleBalance()},e.handleCancer=function(){e.setState({isClicked:!1})},e.handleBalance=function(){e.props.updateBalance(e.state.amount)},e.state={description:"",amount:"",date:"",isClicked:!1},e}return Object(u.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"debtPage",children:[Object(n.jsx)("button",{onClick:this.addDebit,children:"Add Debit"}),this.state.isClicked?Object(n.jsxs)("div",{className:"inputField",children:[Object(n.jsx)("label",{children:"Description:"}),Object(n.jsx)("input",{value:this.state.description,type:"text",name:"description",onChange:this.handleDebitChange}),Object(n.jsx)("label",{children:"Amount:"}),Object(n.jsx)("input",{value:this.state.amount,type:"number",name:"amount",onChange:this.handleDebitChange}),Object(n.jsx)("br",{}),Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{className:"button",onClick:this.handleSubmit,children:"Add"}),Object(n.jsx)("button",{className:"button",onClick:this.handleCancer,children:"Cancel"})]})]}):null,Object(n.jsx)("div",{className:"Balance",children:Object(n.jsx)(N,{money:this.props.money})}),this.props.array?Object(n.jsx)("table",{className:"statement",children:this.props.array.map((function(e,t,a){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.description},"cellDebt".concat(a+1)),Object(n.jsx)("td",{children:"".concat(e.amount)},"cellDebt".concat(a+2)),Object(n.jsx)("td",{children:e.date},"cellDebt".concat(a+3))]},"rowDebt".concat(t+1))}))}):null]})}}]),a}(c.Component)),D=(a(481),function(e){Object(b.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(j.a)(this,a),(e=t.call(this)).addCredit=function(){e.setState({isClicked:!0})},e.handleCreditChange=function(t){e.setState(Object(g.a)({},t.target.name,t.target.value))},e.handleSubmit=function(){e.state.amount<=0?alert("The amount enter must be greater than 0"):(e.props.addCredit(e.state.description,e.state.amount,new Date),e.setState({isClicked:!1})),e.handleBalance()},e.handleCancer=function(){e.setState({isClicked:!1})},e.handleBalance=function(){e.props.updateBalance(e.state.amount)},e.state={description:"",amount:"",date:"",isClicked:!1},e}return Object(u.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"creditPage",children:[Object(n.jsx)("button",{onClick:this.addCredit,children:"Add Credit"}),this.state.isClicked?Object(n.jsxs)("div",{className:"inputField",children:[Object(n.jsx)("label",{children:"Description:"}),Object(n.jsx)("input",{value:this.state.description,type:"text",name:"description",onChange:this.handleCreditChange}),Object(n.jsx)("label",{children:"Amount:"}),Object(n.jsx)("input",{value:this.state.amount,type:"number",name:"amount",onChange:this.handleCreditChange}),Object(n.jsx)("br",{}),Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{className:"button",onClick:this.handleSubmit,children:"Add"}),Object(n.jsx)("button",{className:"button",onClick:this.handleCancer,children:"Cancel"})]}),"                    "]}):null,Object(n.jsx)("div",{className:"Balance",children:Object(n.jsx)(N,{money:this.props.money})}),this.props.array?Object(n.jsx)("table",{className:"statement",children:this.props.array.map((function(e,t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("div",{className:"items",children:e.description})}),Object(n.jsx)("td",{children:"$".concat(e.amount)}),Object(n.jsx)("td",{children:e.date})]},"row".concat(t+1))}))}):null]})}}]),a}(c.Component)),B=function(e){Object(b.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(j.a)(this,a),(e=t.call(this)).handleValidation=function(t,a){e.setState({users:{name:t,password:a,balance:"1000"},isLoggedIn:!0})},e.handleSignOut=function(){e.setState({isLoggedIn:!1})},e.retrieveDebt=Object(h.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://moj-api.herokuapp.com/debits",t.prev=1,t.next=4,v.a.get("https://moj-api.herokuapp.com/debits");case 4:a=t.sent,console.log(a.data),e.setState({debt:a.data}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])}))),e.retrieveCredit=Object(h.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://moj-api.herokuapp.com/credits",t.prev=1,t.next=4,v.a.get("https://moj-api.herokuapp.com/credits");case 4:a=t.sent,e.setState({credit:a.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])}))),e.addCredit=function(t,a){var n={description:t,amount:a,date:Date().toLocaleString()};e.state.credit.push(n)},e.addDebit=function(t,a){var n={description:t,amount:a,date:Date().toLocaleString()};e.state.debt.push(n)},e.handleLoginNav=function(){e.setState({login:!0})},e.handleNavAppear=function(){e.setState({login:!1})},e.updateBalance=function(t){var a=e.state.users.balance-t;0==a||a<0?alert("You can't do that"):e.setState({users:Object(l.a)(Object(l.a)({},e.state.users),{},{balance:a})})},e.state={users:{name:"",password:"",balance:""},isLoggedIn:!1,debt:[],cedit:[],login:!1},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.retrieveCredit(),this.retrieveDebt()}},{key:"render",value:function(){return Object(n.jsxs)(m.a,{children:[this.state.login?null:Object(n.jsx)("div",{className:"container-fluid",style:{padding:"0"},children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col",children:Object(n.jsx)(y,{handleLoginNav:this.handleLoginNav,logOut:this.state.isLoggedIn,logOutFunction:this.handleSignOut,debtArray:this.retrieveDebt,creditArray:this.retrieveCredit})})})}),Object(n.jsxs)(O.d,{children:[Object(n.jsx)(O.b,{exact:!0,path:"/",children:Object(n.jsx)(C,{})}),Object(n.jsx)(O.b,{exact:!0,path:"/login",children:Object(n.jsx)(f,{handleNavAppear:this.handleNavAppear,validHandler:this.handleValidation,isValid:this.state.isValid})}),Object(n.jsx)(O.b,{exact:!0,path:"/userprofile",children:Object(n.jsx)(k,{money:this.state.users.balance,name:this.state.users.name})}),Object(n.jsx)(O.b,{exact:!0,path:"/debitpage",children:Object(n.jsx)(S,{updateBalance:this.updateBalance,money:this.state.users.balance,addDebit:this.addDebit,array:this.state.debt})}),Object(n.jsx)(O.b,{exact:!0,path:"/creditpage",children:Object(n.jsx)(D,{updateBalance:this.updateBalance,money:this.state.users.balance,addCredit:this.addCredit,array:this.state.credit})})]}),this.state.isLoggedIn?Object(n.jsx)(O.a,{to:"/userprofile"}):Object(n.jsx)(O.a,{to:"/"})]})}}]),a}(c.Component),L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,484)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))};r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(B,{})}),document.getElementById("root")),L()}},[[482,1,2]]]);
//# sourceMappingURL=main.f7c72589.chunk.js.map