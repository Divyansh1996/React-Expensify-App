import React from "react";
import { shallow } from "enzyme";
import {ExpenseSummary} from "../../components/ExpenseSummary";

test("Testing with a single expense", () => {
    const wrapper = shallow(<ExpenseSummary expenseCount = {1} expenseTotal = {23131}/>)
    expect(wrapper).toMatchSnapshot();

})

test("Testing with multiple expense", () => {
    const wrapper = shallow(<ExpenseSummary expenseCount = {4} expenseTotal = {2313312311}/>)
    expect(wrapper).toMatchSnapshot();
})