import React from "react"
import Login from "./components/Login/Login";
import { Switch, Link, Route, BrowserRouter } from "react-router-dom"
import Wallet from "./components/Wallet/Wallet"
import "./App.css"
import AddExpenses from "./components/AddExpenses/AddExpenses"
import AddIncome from "./components/AddIncome/AddIncome"
import LogOut from "./components/Logout/Logout"
import Register from "./components/Register/Register"

function App() {
  return (
    <div className="app">
      < BrowserRouter>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/wallet" component={Wallet}></Route>
        <Route exact path="/wallet/addexpenses" component={AddExpenses}></Route>
        <Route exact path="/wallet/addincome" component={AddIncome}></Route>
        <Route exact path="/logout" component={LogOut}></Route>
        <Route exact path="/register" component={Register}></Route>
      </ BrowserRouter>
    </div>
  );
}

export default App;
