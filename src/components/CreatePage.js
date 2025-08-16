import React from "react";
import ExpenseForm from "./ExpenseForm";
import { addExpense } from "../actions/expenses";
import { connect } from "react-redux";

export class CreatePage extends React.Component{
    onSubmit = (expense) => {
        this.props.addNewExpense(expense)
        this.props.history.push("/")
    }
    render(){
        return (
        <div>
            <ExpenseForm onSubmit={this.onSubmit}/>
        </div>)
    }
}

const mapDispatchtoProps = (dispatch) => ({
        addNewExpense: (expense) => {dispatch(addExpense(expense))}
    }
)

export default connect(undefined,mapDispatchtoProps)(CreatePage);