import React from "react";
import "./Login.css"
import axios from "axios"
import { Link } from "react-router-dom"

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }


  changeClass = () => {
        var x = document.querySelector(".inputpas");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      }


  setUsername = (event) => {
        this.setState({ username: event.target.value });
      };

    setPassword = (event) => {
      this.setState({ password: event.target.value });
    };


    submitCredentials = () => {
      const payload = {
        username: this.state.username,
        password: this.state.password,
      };


      axios
        .post(`https://budgetapp.digitalcube.rs/api/tenants/77bd5a17-d27d-45b3-88fe-4cd8384a297e/sessions?`, payload
        )
        .then((response) => {
          console.log(response);
          sessionStorage.setItem(
            "token",
            (response.data.token)
          );
          this.props.history.push("/wallet");
        })
        .catch((error) => alert("Invalid email or password"));
      console.log(localStorage);
    };

    render() {
      return (
        <div className="wrapLogin">
          <div className="loginHeader">
            <div>
              <svg width="71" height="81" viewBox="0 0 161 182" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.8" d="M76.7365 0L0 50.8542V50.9499L59.3378 90.2529L76.7365 78.7015V0Z" fill="#7FC481" fill-opacity="0.42" />
                <path opacity="0.8" d="M0 129.7L76.7365 180.505V101.804L59.3378 90.2529L0 129.556V129.7Z" fill="#7FC481" fill-opacity="0.42" />
                <path opacity="0.8" d="M160.998 52.1012L84.262 1.24707V79.9486L101.709 91.4998L160.998 52.197V52.1012Z" fill="#7FC481" fill-opacity="0.42" />
                <path opacity="0.8" d="M84.262 181.753L160.998 130.898V130.802L101.709 91.4989L84.262 103.05V181.753Z" fill="#7FC481" fill-opacity="0.42" />
                <path opacity="0.8" d="M0 50.95V129.556L59.3378 90.2527L0 50.95Z" fill="#5E9C60" />
                <path opacity="0.8" d="M161 130.803V52.1968L101.709 91.4998L161 130.803Z" fill="#5E9C60" />
              </svg>
            </div>
            <div className="titleWrap">
              <h4>Welcome to Budget App</h4>
              <h5>Fill in the fields to continue</h5>
            </div>
          </div>
          <div className="inputWrap">
            <div className="userNameInput">
              <label></label>
              <input

                onChange={this.setUsername}
                type="email"
                placeholder="Username"
              />
            </div>
            <div className="passwordInput">
              <label >Password*</label>
              <input
                className="inputpas"
                onChange={this.setPassword}
                type="password"
                placeholder="Input text"
              />
              <div className="eyeIcon" onClick={this.changeClass}>
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.6">
                    <path d="M8.50004 4.25004C11.1846 4.25004 13.5788 5.75879 14.7475 8.14587C13.5788 10.533 11.1846 12.0417 8.50004 12.0417C5.81546 12.0417 3.42129 10.533 2.25254 8.14587C3.42129 5.75879 5.81546 4.25004 8.50004 4.25004ZM8.50004 2.83337C4.95837 2.83337 1.93379 5.03629 0.708374 8.14587C1.93379 11.2555 4.95837 13.4584 8.50004 13.4584C12.0417 13.4584 15.0663 11.2555 16.2917 8.14587C15.0663 5.03629 12.0417 2.83337 8.50004 2.83337ZM8.50004 6.37504C9.47754 6.37504 10.2709 7.16837 10.2709 8.14587C10.2709 9.12337 9.47754 9.91671 8.50004 9.91671C7.52254 9.91671 6.72921 9.12337 6.72921 8.14587C6.72921 7.16837 7.52254 6.37504 8.50004 6.37504ZM8.50004 4.95837C6.74337 4.95837 5.31254 6.38921 5.31254 8.14587C5.31254 9.90254 6.74337 11.3334 8.50004 11.3334C10.2567 11.3334 11.6875 9.90254 11.6875 8.14587C11.6875 6.38921 10.2567 4.95837 8.50004 4.95837Z" fill="black" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="forgotPass">
              <a href="#"> <h5>Forgot password?</h5></a>
            </div>
          </div>
          <div className="button">
            <button onClick={this.submitCredentials}>
              Log in
            </button>
          </div>
          <div className="register">
            <h6>Don't have an account? <Link to="/register">Register</Link></h6>
          </div>
        </div>
      );
    }
  }
  export default Login;