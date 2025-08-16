import expenseReducer from "../../reducers/expenses"
import expenses from "../fixtures/expenses";
import moment from "moment";


test("Testing the method with default values", () => {
    const state = expenseReducer(undefined, {type: "@@INIT"})
    expect(state).toEqual([])
})

test("Testing the method with action type as REMOVE_EXPENSE", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: '1'
    }
    const state = expenseReducer(expenses, action)
    expect(state).toEqual([expenses[1], expenses[2]])
})

test("Testing the method with action type as REMOVE_EXPENSE without non-existing value", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: '-1'
    }
    const state = expenseReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test("Testing the method with action type as EDIT_EXPENSE with updated value", () => {
    const action = {
        type: "EDIT_EXPENSE",
        id: '1',
        updates: {note: "A new note"}
    }
    const state = expenseReducer(expenses, action)
    expect(state[0].note).toBe("A new note")
})

test("Testing the method with action type as EDIT_EXPENSE with non-existing id", () => {
    const action = {
        type: "EDIT_EXPENSE",
        id: '-1',
        updates: {note: "A new note"}
    }
    const state = expenseReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test("Testing the method with action type as ADD_EXPENSE with new Value", () => {
    const expense = {
        id:'4',
        description: "Household Items",
        note: '',
        amount: 2000,
        createdAt:moment(0).valueOf()
    }
    const action = {
        type: "ADD_EXPENSE",
        expense: expense
    }
    const state = expenseReducer(expenses, action)
    expect(state).toEqual([...expenses, expense])
})