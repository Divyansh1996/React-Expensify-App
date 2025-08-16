import React from "react";

import ExpenseList from "./ExpenseList";
import ExpenseFilterInput from "./ExpenseFilterInput";

const DashboardPage = () => (
    <div>
        <ExpenseFilterInput />
        <ExpenseList />
    </div>
)


export default DashboardPage;