import {v4 as uuid4} from 'uuid';

export const addExpense = ({description='', note = '', amount=0,createdAt=''} = {}) => (
    {
        type:'ADD_EXPENSE',
        expense:
            {
                id: uuid4(),
                description,
                note,
                amount,
                createdAt
            }
    })

export const removeExpense=({id=''}={}) => ({
    type:'REMOVE_EXPENSE',
    id
})


export const editExpense = (id, updates) => ({
    id,
    type:'EDIT_EXPENSE',
    updates
})