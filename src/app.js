import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./styles/styles.scss";
import configureStore from './store/store';
import AppRouter, {history} from "./router/AppRouter";
import {startSetExpenses} from "./actions/expenses";
import {Login, Logout} from "./actions/auth"
import {Provider} from "react-redux";
import 'react-dates/lib/css/_datepicker.css'
import './firebase/firebase'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import LoadingPage from "./components/LoadingPage";

const store = configureStore();
// store.dispatch(addExpense({description:'Water Bill', amount: 2200, createdAt: 1754853694575,note: ''}))
// store.dispatch(addExpense({description:'Gas Bill', amount: 100, createdAt: 1752175377251,note: ''}))
// store.dispatch(addExpense({description:'Rent', amount: 1400, createdAt: 1753989857361,note: ''}))


// setTimeout(() => {
//  store.dispatch(editText('water'))
// }, 3000)


// const state = store.getState()

const JSX = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(<LoadingPage />,document.getElementById("newApp"))

let isRendered = false;
const renderApp = () => {
    if(!isRendered){
        ReactDOM.render(JSX, document.getElementById("newApp"))
        isRendered = true;
    }
}

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
    if(user){
        console.log("User is logged in")
        renderApp();
        store.dispatch(Login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
        if(history.location.pathname === '/'){
            history.push('/dashboard')
        }
    })
    }
    else{
        console.log("User is logged out")
        store.dispatch(Logout())
        renderApp();
        history.push('/')
    }
})