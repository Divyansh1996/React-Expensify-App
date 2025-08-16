import React from "react";
import {CreatePage} from "../../components/CreatePage";
import {shallow} from "enzyme";
import expenses from "../fixtures/expenses";

let addNewExpense, history, wrapper

beforeEach(()=> {
    addNewExpense = jest.fn();
    history ={
        push: jest.fn()
    }
    wrapper = shallow(<CreatePage addNewExpense = {addNewExpense}  history = {history}/>)
})

test("Testing the method of CreatePage with default values", () => {
    expect(wrapper).toMatchSnapshot();
})


test("Testing the method of CreatePage with some values", () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(addNewExpense).toHaveBeenCalledWith(expenses[1])
    expect(history.push).toHaveBeenCalledWith('/')
})

