import ExpenseForm from "../../components/ExpenseForm";
import { shallow } from "enzyme";
import React from "react";
import expenses from "../fixtures/expenses";
import moment from "moment";
import { SingleDatePicker } from 'react-dates';

test("Testing the Expense Form Component without any values", () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
})


test("Testing the Expense Form Component with values", () => {
    const wrapper = shallow(<ExpenseForm expense = {expenses[0]}/>)
    expect(wrapper).toMatchSnapshot()
})

test("Testing the Expense Form Component with form submit", () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('form').at(0).simulate('submit', {
        preventDefault: () => {}
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.state("error").length).toBeGreaterThan(0)
})


test("Testing the Expense Form Component on Description Change", () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('input').at(0).simulate('change', {
        target:{value:"New Description"}
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.state("description")).toBe("New Description")
})

test("Testing the Expense Form Component on Note Change", () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('textarea').simulate('change', {
        target:{value:"New Note"}
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.state("note")).toBe("New Note")
})

test("Testing the Expense Form Component on Amount Change with valid input", () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('input').at(1).simulate('change', {
        target:{value:"1200.12"}
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.state("amount")).toBe("1200.12")
})

test("Testing the Expense Form Component on Amount Change with invalid input", () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('input').at(1).simulate('change', {
        target:{value:"1200.1222"}
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.state("amount")).toBe("")
})

test("Testing the Expense Form Component to add New Expense", () => {
    const onSubmitSpy = jest.fn()
    const wrapper = shallow(<ExpenseForm expense ={expenses[0]} onSubmit = {onSubmitSpy}/>)
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    })
    expect(wrapper.state("error")).toBe(undefined)
    expect(onSubmitSpy).toHaveBeenCalledWith({
        description: expenses[0].description,
        note: expenses[0].note,
        amount: expenses[0].amount,
        createdAt: expenses[0].createdAt
    })
})

test("Testing the Expense form Component with onDateChange action", () => {
    const wrapper = shallow(<ExpenseForm />)
    const now = moment()
    wrapper.find(SingleDatePicker).prop('onDateChange')(now)
    expect(wrapper.state("createdAt")).toEqual(now)
})

test("Testing the Expense form Component with onFocusChange action", () => {
    const wrapper = shallow(<ExpenseForm />)
    const obj = {
        focused: true
    }
    wrapper.find(SingleDatePicker).prop('onFocusChange')(obj)
    expect(wrapper.state("calenderFocused")).toBe(true)
})