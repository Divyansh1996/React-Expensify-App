import React from "react";
import { connect } from "react-redux";
import {Link} from "react-router-dom";
import getSelectedExpenses  from '../selectors/expenses'
import getTotalExpense from '../selectors/expense-total'
import numeral from "numeral";

export const ExpenseSummary = ({expenseCount, expenseTotal}) => {
  const expenseWord = expenseCount === 1? "expense": "expenses"
  const numeralExpenseTotal = numeral(expenseTotal).format('$0,0.00')
  return(
    <div className="page-header">
        <div className="content-container">
          <div className="page-header__title">
            Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{numeralExpenseTotal}</span>
          </div>
          <div className="page-header__actions">
            <Link className="button-layout" to = "/create">Add Expense</Link>
          </div>
        </div>
    </div>
  )
}

const mapStateToProps = (state) => {
    const visibleExpenses = getSelectedExpenses(state.expenses, state.filter)
    return {
        expenseCount: visibleExpenses.length,
        expenseTotal: getTotalExpense(visibleExpenses)
    }
}

export default connect(mapStateToProps) (ExpenseSummary)