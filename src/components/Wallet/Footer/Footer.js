import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"

const Footer = () => {



    return (
        <div className="wrapFooter">
            <Link to="/wallet">
                <div><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.5 7.28V5C21.5 3.9 20.6 3 19.5 3H5.5C4.39 3 3.5 3.9 3.5 5V19C3.5 20.1 4.39 21 5.5 21H19.5C20.6 21 21.5 20.1 21.5 19V16.72C22.09 16.37 22.5 15.74 22.5 15V9C22.5 8.26 22.09 7.63 21.5 7.28ZM20.5 9V15H13.5V9H20.5ZM5.5 19V5H19.5V7H13.5C12.4 7 11.5 7.9 11.5 9V15C11.5 16.1 12.4 17 13.5 17H19.5V19H5.5Z" fill="black" fill-opacity="0.7" />
                    <path d="M16.5 13.5C17.3284 13.5 18 12.8284 18 12C18 11.1716 17.3284 10.5 16.5 10.5C15.6716 10.5 15 11.1716 15 12C15 12.8284 15.6716 13.5 16.5 13.5Z" fill="black" fill-opacity="0.7" />
                </svg>

                </div>
            </Link>
            <div><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.38 18.47C20.82 17.77 21.08 16.96 21.08 16.08C21.08 13.59 19.07 11.58 16.58 11.58C14.09 11.58 12.08 13.59 12.08 16.08C12.08 18.57 14.09 20.58 16.57 20.58C17.45 20.58 18.27 20.32 18.96 19.88L22.08 23L23.5 21.58L20.38 18.47ZM16.58 18.58C15.2 18.58 14.08 17.46 14.08 16.08C14.08 14.7 15.2 13.58 16.58 13.58C17.96 13.58 19.08 14.7 19.08 16.08C19.08 17.46 17.96 18.58 16.58 18.58ZM16.22 10.08C15.48 10.1 14.77 10.26 14.12 10.53L13.57 9.7L9.77 15.88L6.76 12.36L3.13 18.17L1.5 17L6.5 9L9.5 12.5L13.5 6L16.22 10.08ZM18.81 10.58C18.17 10.3 17.48 10.13 16.76 10.09L21.88 2L23.5 3.18L18.81 10.58Z" fill="black" fill-opacity="0.7" />
            </svg>
            </div>
            <Link to="/logout">
                <div><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.5 18H21.5V16H3.5V18ZM3.5 13H21.5V11H3.5V13ZM3.5 6V8H21.5V6H3.5Z" fill="black" fill-opacity="0.7" />
                </svg>
                </div>
            </Link>
        </div>
    )
}
export default Footer