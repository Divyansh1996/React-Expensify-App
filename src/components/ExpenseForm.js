import moment from "moment";
import React from "react";
import 'react-dates/initialize';
import { SingleDatePicker } from "react-dates";

export default class ExpenseForm extends React.Component{
    state ={
        description: this.props.expense? this.props.expense.description : '',
        note: this.props.expense? this.props.expense.note : '',
        amount: this.props.expense? (this.props.expense.amount).toString() : '',
        createdAt: this.props.expense? moment(this.props.expense.createdAt) : moment(),
        calenderFocused: false,
        error:undefined
    }

    OnDescriptionChange = (e) =>{
        const description = e.target.value
        this.setState(()=> ({description}))
    }

    OnNoteChange = (e) =>{
        const note = e.target.value
        this.setState(()=> ({note}))
    }

    OnAmountChange = (e) => {
        const amount = e.target.value
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>({amount}))
        }
    }

    onDateChangeHere = (date) => {
        if(date){
            this.setState(()=>({createdAt:date}))
        }
    }

    onFocusChange=({focused}) => {
        this.setState(()=>({calenderFocused:focused}))
    }

    onSubmitChange = (e) => {
        e.preventDefault()
        if(!this.state.description || !this.state.amount){
            this.setState(()=>({error: "Please provide the description and amount"}))
        }
        else{
            this.setState(()=>({error: undefined}))
            this.props.onSubmit(({
                description: this.state.description,
                note: this.state.note,
                createdAt: this.state.createdAt.valueOf(),
                amount:parseFloat(this.state.amount,10)
            }))
        }
    }

    render(){
        return(
            <div>
                <h1>ExpenseForm</h1>
                <h2>{this.state.error}</h2>
                <form onSubmit={this.onSubmitChange}>
                    <input type="text" placeholder="Description" value = {this.state.description} autoFocus onChange={this.OnDescriptionChange}/>
                    <input type="text" placeholder="Amount" value = {this.state.amount} onChange={this.OnAmountChange}/>
                    <textarea placeholder="Add a Note" value = {this.state.note} onChange={this.OnNoteChange} optional></textarea>
                    <SingleDatePicker 
                        date ={this.state.createdAt} 
                        onDateChange={this.onDateChangeHere} 
                        focused = {this.state.calenderFocused} 
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={()=>(false)}
                        />
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}