import React from "react"
import { connect } from "react-redux"
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {editText,sortByDate,sortByAmount, setStartDate, setEndDate} from "../actions/filter"
import {DateRangePicker} from 'react-dates'

export class ExpenseFilterInput extends React.Component{
    state={
        calenderFocused:null
    }
    onDatesChange = ({startDate, endDate})=>{
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }

    onFocusChange =(focusedInput) => {
        this.setState(()=>({calenderFocused: focusedInput}))
    }
    onTextChange = (e) => {
        this.props.editText(e.target.value)
    }
    onSortByChange = (e) => {
        e.target.value === "date"? this.props.sortByDate(): this.props.sortByAmount()
    }
    render(){
        return (
            <div>
                <input type="text" value={this.props.filter.text} onChange={this.onTextChange}/>
                <select value={this.props.filter.sortBy} 
                    onChange={this.onSortByChange}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker 
                    startDateId="your_unique_start_date_id"
                    endDateId="your_unique_end_date_id"
                    startDate={this.props.filter.startDate}
                    endDate={this.props.filter.endDate}
                    onDatesChange={this.onDatesChange}    
                    focusedInput={this.state.calenderFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={()=>(false)}
                    showClearDates={true}
                />
            </div>
        )
    }
}

const mapStatetoProps = (state) => ({
        filter: state.filter
    }
)
const mapDispatchtoProps = (dispatch) => ({
    setStartDate: (startDate) =>{dispatch(setStartDate(startDate))},
    setEndDate: (endDate) =>{dispatch(setEndDate(endDate))},
    editText: (text) => {dispatch(editText(text))},
    sortByDate: () =>{dispatch(sortByDate())},
    sortByAmount: () =>{dispatch(sortByAmount())}
})
export default connect(mapStatetoProps, mapDispatchtoProps)(ExpenseFilterInput)