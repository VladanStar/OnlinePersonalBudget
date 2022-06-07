import React from "react"
import Login from "./components/login/Login"
import { Switch, Link, Route } from "react-router-dom"
import Wallet from "./components/Wallet/Wallet"
import "./app.css"
import AddExpenses from "./components/AddExpenses/AddExpenses"
import AddIncome from "./components/AddIncome/AddIncome"
import LogOut from "./components/logout/Logout"
import Register from "./components/register/Register"

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/wallet" component={Wallet}></Route>
        <Route exact path="/wallet/addexpenses" component={AddExpenses}></Route>
        <Route exact path="/wallet/addincome" component={AddIncome}></Route>
        <Route exact path="/logout" component={LogOut}></Route>
        <Route exact path="/register" component={Register}></Route>
      </Switch>
    </div>
  );
}

export default App;
