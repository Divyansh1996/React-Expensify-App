import {createStore, combineReducers} from 'redux'
import {v4 as uuid4} from 'uuid';


//Expenses

const addExpense = ({description='', note = '', amount=0,createdAt=''} = {}) => (
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

const removeExpense=({id=''}={}) => ({
    type:'REMOVE_EXPENSE',
    id
})

 console.log("After removeExpense log")

const editExpense = (id, updates) => ({
    type:'EDIT_EXPENSE',
    updates
})


//Filters

const editText = (text='') => ({type:'EDIT_TEXT', text})

const sortByDate = () =>({type:'SORT_BY_DATE'})

const sortByAmount = () =>({type:'SORT_BY_AMOUNT'})

const setStartDate = (startDate=undefined) => ({type:"SET_START_DATE",startDate })

const setEndDate = (endDate=undefined) => ({type:"SET_END_DATE",endDate })

const expenseStateDefaultValues = [];

const expenseReducer = (state=expenseStateDefaultValues, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [...state, action.expense]
        case 'REMOVE_EXPENSE':
            const newState = state.filter(({id}) => id !== action.id)
            return newState;
        case 'EDIT_EXPENSE':
            state.map((expense) => {
                if(expense.id === action.updates.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                }
                else{
                    return expense
                }
            })
        default: return state
    }
}

const filterStateDefaultValues= {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filterReducer = (state=filterStateDefaultValues, action) => {
    switch(action.type){
        case 'EDIT_TEXT':
        return {
            ...state,
            text:action.text
        }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy:'amount'
            }
        
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy:'date'
            }
        case "SET_START_DATE":
            return {
                ...state,
                startDate:action.startDate
            }
         case "SET_END_DATE":
            return {
                ...state,
                endDate:action.endDate
            }
        default: return state
    }
} 

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startMatch = typeof startDate !== 'number' || expense.createdAt>=startDate;
        const endMatch = typeof endDate !== 'number' || expense.createdAt <=endDate;
        const textMatch = typeof text !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase());
        
        return startMatch && endMatch && textMatch;
    }).sort((a,b) => {
        if(sortBy === 'date'){
            return a.createdAt <=b.createdAt?1:-1
        }
        if(sortBy === 'amount'){
            return a.amount <=b.amount?1:-1
        }
    })
}

const store = createStore(combineReducers({
    expenses: expenseReducer,
    filter:filterReducer
}))

const unsubscribe = store.subscribe(() => {
    const state = store.getState();
    const expenses = getVisibleExpenses(state.expenses, state.filter)
    console.log(expenses)

})

const expenseOne = store.dispatch(addExpense({description:'Rat Maze', amount: 1200, createdAt: -1000,note: ''}))

const expenseTwo = store.dispatch(addExpense({description:'Tiles' , amount: 1400, createdAt:1000, note: ''}))

// console.log("Removing expense")

// store.dispatch(removeExpense({id:expenseOne.expense.id}))

// store.dispatch(editExpense(expenseTwo.expense.id, {amount:1500}))

// store.dispatch(editText('tiles'))

// store.dispatch(editText())

store.dispatch(sortByAmount())

// store.dispatch(sortByDate());

// store.dispatch(setStartDate(-2005))

// store.dispatch(setStartDate());

// store.dispatch(setEndDate(1250));

const demoState = {
    expenses:[
        {
            id: 'cdcscdscs',
            description: "January Rent",
            note:"This was the final payment for that address",
            amount:54500,
            createdAt:0
        }
    ],
    filter:{
        text:'rent',
        sortBy:'amount',
        startDate: undefined,
        endDate: undefined
    }
};


// const user = {
//     name: 'Divyansh',
//     age: 30
// }

// const newUser = {
//     ...user,
//     age:40
// }

// console.log(newUser)