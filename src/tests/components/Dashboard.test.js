import React from "react";
import DashboardPage from "../../components/DashboardPage";
import { shallow } from "enzyme";

test("Testing the Dashboard page", () => {
    const wrapper = shallow(<DashboardPage/>)
    expect(wrapper).toMatchSnapshot()
})