import React from "react";
import { removeExpense } from "../actions/expenses";
import {Link} from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

const ExpenseListItem = ({id, description, amount, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}>{description}</Link>
        <p>{numeral(amount).format('$0,0.00')} - {moment(createdAt).format('LL')}</p>
    </div>
)

export default ExpenseListItem