import React from "react"
import "./SingleItem.css"
import PropTypes from "prop-types"

const SingleItem = ({ amount, description, svg, created }) => {

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const date = new Date(created);
    const day = date.getDate()
    const month = date.toLocaleString('default', { month: 'long' });
    const iconImage = `${`https://budgetapp.digitalcube.rs/assets/icons/categories/`}${svg}`


    return (
        <div className="singleItem">
            <div className="leftDiv">
                <div className="dateWrap">
                    <h2>{day}</h2>
                    <h3>{month}</h3>
                </div>
                <div>
                    <img src={iconImage} alt="icon" />
                </div>
            </div>
            <div className="rigDiv">
                <h3>{description}</h3>
                <h2>{numberWithCommas(amount)}<span>RSD</span></h2>
            </div>
        </div>
    )
}

SingleItem.propTypes = {
    amount: PropTypes.number,
    description: PropTypes.string,
    idChsvgeckboxState: PropTypes.string,
    created: PropTypes.string
}

export default SingleItem