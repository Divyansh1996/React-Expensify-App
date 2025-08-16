import moment from "moment";
import selectExpense from "../../selectors/expenses";
import expenses from "../fixtures/expenses";

test("Testing the selectExpense Method for StartDate Check", () => {
    const filter = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }
    const result = selectExpense(expenses, filter)
    expect(result).toEqual([expenses[2], expenses[0]])
})

test("Testing the selectExpense Method for EndDate Check", () => {
    const filter = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    }
    const result = selectExpense(expenses, filter)
    expect(result).toEqual([expenses[0], expenses[1]])
})

test("Testing the selectExpense Method for TextFilter Check", () => {
    const filter = {
        text: 'ill',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpense(expenses, filter)
    expect(result).toEqual([expenses[2], expenses[1]])
})

test("Testing the selectExpense Method for Sorting by Date", () => {
    const filter = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpense(expenses, filter)
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]])
})

test("Testing the selectExpense Method for Sorting by Amount", () => {
    const filter = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpense(expenses, filter)
    expect(result).toEqual([expenses[2], expenses[1], expenses[0]])
})