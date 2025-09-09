import React from "react";
import { useParams,useHistory } from "react-router-dom";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import expenses from "../selectors/expenses";
import { editExpense,startRemoveExpense,startEditExpense } from "../actions/expenses";

export class EditPage extends React.Component{
    onSubmitChange = (expense) =>{
         this.props.startEditExpense(expense)
         this.props.history.push("/")
    }
    onRemove = () => {
        this.props.removeNewExpense()
        this.props.history.push("/")
    }
    render(){
        return (
            <div>
               <div className="page-header">
                    <div className="content-container">
                        <div className="page-header__title">Edit Expense</div>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm expense = {this.props.expense} onSubmit={this.onSubmitChange} buttonName={"Save Expense"}/>
                    <button className="button-layout--secondary" onClick={this.onRemove}>Remove Expense</button>
                </div>
            </div>
        )
    }
}

const mapStatetoProps = (state,props) => ({
    expense: state.expenses.find((expense) =>expense.id ===props.match.params.id),
})

const mapDispatchtoProps = (dispatch,props) => ({
    startEditExpense: (expense) => {dispatch(startEditExpense(props.match.params.id,expense))},
    removeNewExpense: () => {dispatch(startRemoveExpense({id:props.match.params.id}))}
})
export default connect(mapStatetoProps, mapDispatchtoProps)(EditPage);