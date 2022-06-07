import axios from "axios";
import React from "react"
import SingleCategories from "./singleCategories/SingleCategories";
import { Link } from "react-router-dom"
import "./addexpenses.css"
import { document, querySelector } from 'jquery';
import Footer from "../wallet/footer/Footer";

class AddExpenses extends React.Component {
    constructor() {
        super();
        this.state = {
            categories: [],
            amount: 0,
            description: "",
            idCheckbox: "",
        }
    }

    setAmount = (event) => {
        this.setState({ amount: event.target.value });
    };

    setDescription = (event) => {
        this.setState({ description: event.target.value });
    };
    setId = (event) => {
        this.setState({ idCheckbox: event.target.id });
    };

    submitCredentials = () => {
        const headers = {
            'Authorization': `${sessionStorage.token}`

        };


        const payload = {
            amount: this.state.amount,
            category: this.state.idCheckbox,
            currency: "RSD",
            description: this.state.description,
        };
        axios
            .post(`https://budgetapp.digitalcube.rs/api/transactions`, payload, { headers }
            )
            .then((response) => {
                console.log(response);
                this.props.history.push("/wallet");
            })
            .catch((error) => alert("Fill correctly all inputs"));
        console.log(localStorage);

    };

    fetchData = () => {
        const headers = {
            'Authorization': `${sessionStorage.token}`

        };

        axios.get(`https://budgetapp.digitalcube.rs/api/transactions/categories?category_type=outcome`, { headers })
            .then(response => {
                this.setState({ categories: response.data })
            }
            )
        console.log(sessionStorage);
    }

    componentDidMount() {
        this.fetchData()
    }

    render() {
        return (
            <div className="expenseWrap">
                {console.log(this.state.categories)}
                <div className="headerExpenses">
                    <Link to="/wallet">
                        <div className="iconHeader">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.7">
                                    <path d="M16.0508 3.54749L14.4192 1.92499L5.35333 11L14.4283 20.075L16.0508 18.4525L8.59833 11L16.0508 3.54749Z" fill="black" />
                                </g>
                            </svg>
                        </div>
                    </Link>
                    <div onClick={this.showButton} className="titleHeader">
                        <h3>Add an expense</h3>
                    </div>
                </div>
                <div className="inputWrap">
                    <div className="amountInput">
                        <input
                            onChange={this.setAmount}
                            type="text"
                            placeholder="Enter amount here"
                        />
                        <h5>RSD</h5>
                    </div>

                    <div className="descriptionInput">
                        <input
                            onChange={this.setDescription}
                            type="text"
                            placeholder="Enter description"
                        />
                    </div>
                </div>
                <div>
                    <button onClick={this.submitCredentials}>
                        Add an expenses
                    </button>
                </div>

                <div>
                    <SingleCategories categories={this.state.categories} setId={this.setId} idCheckboxState={this.state.idCheckbox} />
                </div>
                <div className="footer">
                    <Footer/>
                </div>
            </div>
        );
    }

}







export default AddExpenses