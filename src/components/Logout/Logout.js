import React from "react"
import axios from "axios"
import Footer from "../Wallet/Footer/Footer"
import "./Logout.css"

class LogOut extends React.Component {
    constructor() {
        super()
    }


    LogOut = () => {
        const headers = {
            'Authorization': `${sessionStorage.token}`

        };
        axios.delete(`https://budgetapp.digitalcube.rs/api/tenants/77bd5a17-d27d-45b3-88fe-4cd8384a297e/sessions?`, { headers })
            .then(response => {
                console.log(response);
            });
        this.props.history.push("/");
    }



    render() {
        return (
            <div className="logoutWrap">
                <div>
                    <svg width="388" height="305" viewBox="0 0 388 305" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="388" height="305" fill="url(#pattern0)" />

                    </svg>

                    <h4>We hope Budget App has lived <br></br>up to your expectations</h4>
                    <h5>Our main priority is to improve your budget</h5>
                </div>
                <div><button onClick={this.LogOut}>Log out</button></div>
                <div><Footer /></div>

            </div>
        )
    }
}

export default LogOut