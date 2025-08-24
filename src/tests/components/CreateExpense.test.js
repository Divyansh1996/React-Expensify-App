import React from "react";
import {CreatePage} from "../../components/CreatePage";
import {shallow} from "enzyme";
import expenses from "../fixtures/expenses";

let startAddExpense, history, wrapper

beforeEach(()=> {
    startAddExpense = jest.fn();
    history ={
        push: jest.fn()
    }
    wrapper = shallow(<CreatePage startAddExpense = {startAddExpense}  history = {history}/>)
})

test("Testing the method of CreatePage with default values", () => {
    expect(wrapper).toMatchSnapshot();
})


test("Testing the method of CreatePage with some values", () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(startAddExpense).toHaveBeenCalledWith(expenses[1])
    expect(history.push).toHaveBeenCalledWith('/')
})
