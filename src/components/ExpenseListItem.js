import React from "react";
import { removeExpense } from "../actions/expenses";
import {Link} from "react-router-dom";
import moment from "moment";

const ExpenseListItem = ({id, description, amount, createdAt}) =>(
    <div>
        <Link to={`/edit/${id}`}>{description}</Link>
        <p>{amount} - {moment(createdAt).format('LL')}</p>
    </div>
)

export default ExpenseListItem