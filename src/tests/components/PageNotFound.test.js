import React from "react";
import {shallow} from "enzyme";
import PageNotFound from "../../components/PageNotFound"

test("Testing the PageNotFound page", () => {
    const wrapper = shallow(<PageNotFound/>)
    expect(wrapper).toMatchSnapshot()
})