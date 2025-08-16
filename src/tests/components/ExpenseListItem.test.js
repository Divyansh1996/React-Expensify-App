import React from "react";
import ExpenseListItem from "../../components/ExpenseListItem"
import expenses from "../fixtures/expenses"
import { shallow } from "enzyme";
import moment from "moment";

test("Testing the ExpenseListItem with few values", () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>)
    expect(wrapper).toMatchSnapshot()
})
