import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./styles/styles.scss";
import configureStore from './store/store';
import AppRouter from "./router/AppRouter";
import {addExpense, removeExpense, editExpense} from "./actions/expenses"
import {editText, sortByDate, sortByAmount, setStartDate, setEndDate} from "./actions/filter"
import getExpenses from  "./selectors/expenses";
import {Provider} from "react-redux";
import 'react-dates/lib/css/_datepicker.scss'

const store = configureStore();
store.dispatch(addExpense({description:'Water Bill', amount: 2200, createdAt: 1754853694575,note: ''}))
store.dispatch(addExpense({description:'Gas Bill', amount: 100, createdAt: 1752175377251,note: ''}))
store.dispatch(addExpense({description:'Rent', amount: 1400, createdAt: 1753989857361,note: ''}))


// setTimeout(() => {
//  store.dispatch(editText('water'))
// }, 3000)


const state = store.getState()

const JSX = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(JSX,document.getElementById("newApp"))