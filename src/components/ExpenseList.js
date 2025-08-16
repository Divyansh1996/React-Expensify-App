import { connect } from "react-redux";
import React from "react";
import expenses from "../reducers/expenses";
import filter from "../reducers/filter";
import ExpenseListItem from "./ExpenseListItem"
import SelectorExpense from "../selectors/expenses"

export const ExpenseList = (props) => {
    return (<div>
        <h1>ExpenseList</h1>
        {props.expenses.length ==0 && <p>No Expense Found</p>}
        {props.expenses.length > 0 && props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense}/>
        })}
    </div>
)}

const mapStatetoProps = (state) => (
    {
        expenses: SelectorExpense(state.expenses, state.filter)
    }
)
export default connect(mapStatetoProps)(ExpenseList)