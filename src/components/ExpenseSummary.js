import React from "react";
import { connect } from "react-redux";
import getSelectedExpenses  from '../selectors/expenses'
import getTotalExpense from '../selectors/expense-total'
import numeral from "numeral";

export const ExpenseSummary = ({expenseCount, expenseTotal}) => {
  const expenseWord = expenseCount === 1? "expense": "expenses"
  const numeralExpenseTotal = numeral(expenseTotal).format('$0,0.00')
  return(
    <div>
        Viewing {expenseCount} {expenseWord} totalling {numeralExpenseTotal}
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