import { shallow } from "enzyme";
import React from "react";
import authReducer from "../../reducers/auth";

test("auth reducer tests when action is LOGIN", () => {
    const result = authReducer(undefined, {type: "LOGIN", uid: "123"})
    expect(result).toEqual({uid: "123"})
})

test("auth reducer tests when action is LOGOUT", () => {
    const result = authReducer(undefined, {type: "LOGOUT"})
    expect(result).toEqual({})
})