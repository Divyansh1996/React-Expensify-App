import { connect } from "react-redux";
import React from "react";
import expenses from "../reducers/expenses";
import filter from "../reducers/filter";
import ExpenseListItem from "./ExpenseListItem"
import SelectorExpense from "../selectors/expenses"

export const ExpenseList = (props) => {
    return (
    <div className="content-container">
        <h1>ExpenseList</h1>
        <div className="list-header">
            <div className="show-for-mobile">Expense</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>
        <div className="list-body">
            {props.expenses.length ==0 && 
                <div className="list-item list-item--empty">
                    <span>No Expenses</span>
                </div>
            }
            {props.expenses.length > 0 && props.expenses.map((expense) => {
                return <ExpenseListItem key={expense.id} {...expense}/>
            })}
        </div>
    </div>
)}

const mapStatetoProps = (state) => (
    {
        expenses: SelectorExpense(state.expenses, state.filter)
    }
)
export default connect(mapStatetoProps)(ExpenseList)