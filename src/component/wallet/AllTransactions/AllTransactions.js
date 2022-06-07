import React from "react"
import SingleItem from "./singleItem/SingleItem"
import PropTypes from "prop-types"

const AllTransactions = ({ allTrans }) => {

    return (
        <div>{
            allTrans.map((trans, index) => {
                return (
                    <SingleItem amount={trans.amount} description={trans.description} svg={trans.icon_svg} created={trans.created} />
                )
            })
        }</div>
    )
}

AllTransactions.propTypes = {
    allTrans: PropTypes.array
}

export default AllTransactions