import React from "react"
import axios from "axios"
import "./Wallet.css"
import AllTransactions from "./AllTransactions/AllTransactions";
import { Link } from "react-router-dom"
import Footer from "./Footer/Footer";


class Wallet extends React.Component {
    constructor() {
        super();
        this.state = {
            transactions: [],
            balanceSumm: 0,

        }
    }



    numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }


    fetchData = () => {
        const headers = {
            'Authorization': `${sessionStorage.token}`

        };

        axios.get(`https://budgetapp.digitalcube.rs/api/transactions?`, { headers })
            .then(response => {
                console.log(response.data);
                this.setState({
                    transactions: response.data.transactions,
                    balanceSumm: response.data.summary.balance
                })
            }
            );
    }

    componentDidMount() {
        this.fetchData()
    }

    render() {
        return (
            <div className="wrapWallet">
                {console.log(this.state)}
                <div className="header">
                    <div className="iconWallet">
                        <svg width="43" height="48" viewBox="0 0 43 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.8" d="M20.2657 0L0 13.4303V13.4556L15.6708 23.8354L20.2657 20.7847V0Z" fill="#7FC481" fill-opacity="0.42" />
                            <path opacity="0.8" d="M0 34.253L20.2657 47.6705V26.8859L15.6708 23.8353L0 34.215V34.253Z" fill="#7FC481" fill-opacity="0.42" />
                            <path opacity="0.8" d="M42.5187 13.7597L22.2532 0.329346V21.114L26.8607 24.1646L42.5187 13.785V13.7597Z" fill="#7FC481" fill-opacity="0.42" />
                            <path opacity="0.8" d="M22.2532 48L42.5187 34.5695V34.5442L26.8607 24.1645L22.2532 27.2151V48Z" fill="#7FC481" fill-opacity="0.42" />
                            <path opacity="0.8" d="M0 13.4557V34.2151L15.6708 23.8354L0 13.4557Z" fill="#5E9C60" />
                            <path opacity="0.8" d="M42.5193 34.5443V13.7849L26.8608 24.1646L42.5193 34.5443Z" fill="#5E9C60" />
                        </svg>
                    </div>
                    <div className="summWrap">
                        <h3>Current balance</h3>
                        <h2>{
                            this.state.transactions.forEach((trans, index) => {
                                return (
                                    this.state.summ += trans.amount
                                )
                            })
                        }
                            {this.numberWithCommas(this.state.balanceSumm)} <span>RSD</span>
                        </h2>

                    </div>

                    <div className="addWrap">
                        <div className="income">
                            <h3>Add an income</h3>
                            <Link to="/wallet/addIncome">  <button>+</button></Link>
                        </div>
                        <div className="expense">
                            <h3>Add an expense</h3>
                            <Link to="/wallet/addexpenses"> <button>-</button></Link>
                        </div>
                    </div>

                </div>

                <div className="main">
                    <AllTransactions allTrans={this.state.transactions} />
                </div>

                <div className="footer">
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Wallet