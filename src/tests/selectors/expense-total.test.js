import React from "react";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses";
import moment from "moment";
import getTotalExpense from "../../selectors/expense-total"

test("Doing the sum for three entries", () => {
    sum = getTotalExpense(expenses)
    expect(sum).toBe(4150)
})


test("Doing the sum for two entries", () => {
    const total = getTotalExpense([expenses[0], expenses[2]])
    expect(total).toBe(2800)
})

test("Doing the sum for empty entries", () => {
    const total = getTotalExpense([])
    expect(total).toBe(0)
})