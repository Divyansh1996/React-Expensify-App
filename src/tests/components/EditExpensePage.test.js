import React from "react";
import { EditPage } from "../../components/EditPage";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses";

let wrapper, history,removeNewExpense,startEditExpense
beforeEach(()=> {
    startEditExpense = jest.fn()
    removeNewExpense = jest.fn()
    history = {
        push: jest.fn()
    }
    wrapper = shallow(
    <EditPage expense ={expenses[0]} 
    history={history} 
    startEditExpense = {startEditExpense}
     removeNewExpense = {removeNewExpense}
     />)
})
test("Testing the editExpensePage with Snapshot", () => {
    expect(wrapper).toMatchSnapshot()
})

test("Testing on Submit/Edit the Changes", () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])
    expect(startEditExpense).toHaveBeenCalledWith(expenses[0])
    expect(history.push).toHaveBeenCalledWith("/")
})

test("Testing on Removing an item", () => {
    wrapper.find('button').simulate('click')
    expect(removeNewExpense).toHaveBeenCalledWith()
    expect(history.push).toHaveBeenCalledWith("/")
})