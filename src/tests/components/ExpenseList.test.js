import { shallow } from "enzyme";
import {ExpenseList} from "../../components/ExpenseList"
import expenses from "../fixtures/expenses";
import React from "react";

test("Testing the ExpenseList with the required data", () => {
    const wrapper = shallow(<ExpenseList expenses={expenses}/>)
    expect(wrapper).toMatchSnapshot()
})

test("Testing the ExpenseList with no data", () => {
    const wrapper = shallow(<ExpenseList expenses={[]}/>)
    expect(wrapper).toMatchSnapshot()
})