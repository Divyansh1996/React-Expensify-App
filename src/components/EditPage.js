import React from "react";
import { useParams,useHistory } from "react-router-dom";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import expenses from "../selectors/expenses";
import { editExpense,removeExpense } from "../actions/expenses";

export class EditPage extends React.Component{
    onSubmitChange = (expense) =>{
         this.props.editNewExpense(expense)
         this.props.history.push("/")
    }
    onRemove = () => {
        this.props.removeNewExpense()
        this.props.history.push("/")
    }
    render(){
        return (
            <div>
                <ExpenseForm expense = {this.props.expense} onSubmit={this.onSubmitChange} />
                <button onClick={this.onRemove}>Remove</button>
            </div>
        )
    }
}

const mapStatetoProps = (state,props) => ({
    expense: state.expenses.find((expense) =>expense.id ===props.match.params.id),
})

const mapDispatchtoProps = (dispatch,props) => ({
    editNewExpense: (expense) => {dispatch(editExpense(props.match.params.id,expense))},
    removeNewExpense: () => {dispatch(removeExpense({id:props.match.params.id}))}
})
export default connect(mapStatetoProps, mapDispatchtoProps)(EditPage);