import React from "react";

import ExpenseList from "./ExpenseList";
import ExpenseFilterInput from "./ExpenseFilterInput";
import ExpenseSummary from "./ExpenseSummary";

const DashboardPage = () => (
    <div>
        <ExpenseFilterInput />
        <ExpenseSummary />
        <ExpenseList />
    </div>
)


export default DashboardPage;