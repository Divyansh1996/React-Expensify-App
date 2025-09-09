import React from "react";
import ExpenseForm from "./ExpenseForm";
import { startAddExpense } from "../actions/expenses";
import { connect } from "react-redux";

export class CreatePage extends React.Component{
    onSubmit = (expense) => {
        this.props.startAddExpense(expense)
        this.props.history.push("/")
    }
    render(){
        return (
        <div>
            <div className="page-header">
                <div className="content-container"> 
                    <div className="page-header__title">Add Expense</div>
                </div>
            </div>
            <div className="content-container">
                <ExpenseForm onSubmit={this.onSubmit} buttonName={"Add Expense"}/>
            </div>
        </div>)
    }
}

const mapDispatchtoProps = (dispatch) => ({
        startAddExpense: (expense) => {dispatch(startAddExpense(expense))}
    }
)

export default connect(undefined,mapDispatchtoProps)(CreatePage);