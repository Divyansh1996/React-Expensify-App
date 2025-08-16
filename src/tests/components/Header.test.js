import React from "react";
import { shallow } from "enzyme";
import Header from "../../components/Header"

test("Doing the testing for Header", () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot()
})