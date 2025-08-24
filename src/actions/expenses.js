import {v4 as uuid4} from 'uuid';
import db from '../firebase/firebase'
import { push,ref } from 'firebase/database';

export const addExpense = (expense) => (
    {
        type:'ADD_EXPENSE',
        expense
    })

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {description = '', note = '', amount = 0, createdAt = ''} = expenseData
        const expense = {description, note, amount, createdAt}
        return push(ref(db, 'expenses'), expense).then((ref) => {
            dispatch(addExpense({id:ref.key, ...expense}))
        })

    }
}

export const removeExpense=({id=''}={}) => ({
    type:'REMOVE_EXPENSE',
    id
})


export const editExpense = (id, updates) => ({
    id,
    type:'EDIT_EXPENSE',
    updates
})