import React from "react";
import { shallow } from "enzyme";
import {ExpenseFilterInput} from "../../components/ExpenseFilterInput";
import moment from "moment";
import {DateRangePicker} from 'react-dates'

let wrapper, setStartDate, setEndDate, editText, sortByDate, sortByAmount, filters;
beforeEach(() => {
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    editText = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    filters = {
            text: '',
            sortBy: 'date',
            startDate: moment().startOf('month'),
            endDate: moment().endOf('month')
    }    
    wrapper = shallow(<ExpenseFilterInput filter = {filters} editText= {editText} setEndDate= {setEndDate} setStartDate={setStartDate} sortByDate ={sortByDate} sortByAmount = {sortByAmount}/>)
})

test("Testing the basics of ExpenseFilterInput", () => {
    expect(wrapper).toMatchSnapshot()
})

test("Testing all the alter filter for ExpenseFilterInput", () => {
    let altFilters = {
         text: 'NewText',
         sortBy: 'date',
         startDate: undefined,
         endDate:undefined
    }
    wrapper.setProps({
        filter:altFilters
    })
    expect(wrapper).toMatchSnapshot()

})

test("Testing the ExpenseFilterInput by making changes to the text", () => {
    wrapper.find('input').at(0).simulate('change', {
        target: {value:"NewValue"}
    })

    expect(editText).toHaveBeenCalledWith("NewValue")
})

test("Testing the ExpenseFilterInput by making changes to the sortBy to date", () => {
    wrapper.find('select').simulate('change', {
        target: {value:"date"}
    })

    expect(sortByDate).toHaveBeenCalledWith()
})

test("Testing the ExpenseFilterInput by making changes to the sortBy to amount", () => {
    wrapper.find('select').simulate('change', {
        target: {value:"amount"}
    })

    expect(sortByAmount).toHaveBeenCalledWith()
})

test("Testing the ExpenseFilterInput by making changes to the dates", () => {
    wrapper.find(DateRangePicker).prop('onDatesChange')({startDate: moment(0), endDate: moment(1)})
    expect(setStartDate).toHaveBeenCalledWith(moment(0))
    expect(setEndDate).toHaveBeenCalledWith(moment(1))
})

test("Testing the ExpenseFilterInput by making changes to the focus", () => {
    wrapper.find(DateRangePicker).prop('onFocusChange')('endDate')
    expect(wrapper.state("calenderFocused")).toBe('endDate')
})