import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import { thunk } from 'redux-thunk';
import expenseReducer from '../reducers/expenses';
import filterReducer from '../reducers/filter';
import authReducer from '../reducers/auth';


const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
    const store = createStore(combineReducers({
        expenses: expenseReducer,
        filter:filterReducer,
        auth: authReducer
    }),
        composer(applyMiddleware(thunk))
    )
    return store
}


