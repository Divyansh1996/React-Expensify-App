import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import expenseReducer from '../reducers/expenses';
import filterReducer from '../reducers/filter';
import { thunk } from 'redux-thunk';

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
    const store = createStore(combineReducers({
        expenses: expenseReducer,
        filter:filterReducer
    }),
        composer(applyMiddleware(thunk))
    )
    return store
}


