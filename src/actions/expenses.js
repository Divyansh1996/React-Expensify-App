import {v4 as uuid4} from 'uuid';
import db from '../firebase/firebase'
import { push,ref,get } from 'firebase/database';

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


export const setExpenses = (expenses) => ({
    type: "SET_EXPENSES",
    expenses
})

export const startSetExpenses = () =>{
    return(dispatch) => {
        return get(ref(db, 'expenses')).then((snapshot) => {
            const expenses = [];
            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setExpenses(expenses))
        })
    }
}