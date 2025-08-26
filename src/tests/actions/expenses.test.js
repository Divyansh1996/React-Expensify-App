import { addExpense, removeExpense, editExpense,startAddExpense, setExpenses, startSetExpenses, startRemoveExpense, startEditExpense } from "../../actions/expenses";
import expenses from '../fixtures/expenses'
import {configureStore} from 'redux-mock-store'
import { thunk } from "redux-thunk";
import db from '../../firebase/firebase'
import { getDatabase, ref, set,remove, update, get, onValue, push, onChildRemoved, onChildChanged, onChildAdded} from "firebase/database";


const createStore = configureStore([thunk])


beforeEach((done) => {
    const expensesData = {}
    expenses.forEach(({description, note, amount, createdAt, id}) => {
        expensesData[id] = {description, note, amount, createdAt}
    })
    set(ref(db, 'expenses'), expensesData).then (() => done())
})

test('to test remove expense method', () => {
  const result = removeExpense({id:'123abc'})
  expect(result).toEqual({
    type:"REMOVE_EXPENSE",
    id:"123abc"
  })
})


test('Testing the Edit Expense Action Method', () => {
    const result = editExpense('123abc', {note:'New Note Value'})
    expect(result).toEqual({
        type:'EDIT_EXPENSE',
        id:'123abc',
        updates: {
            note: 'New Note Value'
        }
    })
})

test("Testing the startEditExpense actions", (done) => {
    const store = createStore({})
    store.dispatch(startEditExpense(expenses[0].id, {amount:21})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "EDIT_EXPENSE",
            id: expenses[0].id,
            updates: {
                amount: 21
            }
        })
        get(ref(db, `expenses/${expenses[0].id}`)).then((snapshot) => {
            expect(snapshot.val().amount).toBe(21);
        })
        done()
    })
})

test("Testing the Add Expense action with provided values", ()=>{
    const result = addExpense(expenses[2])
    expect(result).toEqual({
        expense: expenses[2], 
        type:"ADD_EXPENSE"}
    )
})


test("testing the startExpense testcase with some values", (done) => {

    const expenseData = {
        'description': "Description for new HeadPhone",
        "amount": 1200,
        "createdAt": 1000,
        "note": ''
    }

    const store = createStore({})
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type:'ADD_EXPENSE',
            expense: {id:expect.any(String), ...expenseData}
        })
        return get(ref(db, `expenses/${actions[0].expense.id}`))
        }).then((snapshot) => {
                expect(snapshot.val()).toEqual(expenseData)
                done()
            })
})

test("testing the startExpense testcase with default values", (done) => {
    const expenseData = {}
    const store = createStore({})
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type:'ADD_EXPENSE',
            expense: {id:expect.any(String),description:'', note:'', amount: 0, createdAt:''}
        })
        return get(ref(db, `expenses/${actions[0].expense.id}`))
        }).then((snapshot) => {
                expect(snapshot.val()).toEqual({description:'', note:'', amount: 0, createdAt:''})
                done()
            })
})


test("Testing the setExpenses action", () => {
    const actions = setExpenses(expenses)
    expect(actions).toEqual({
        type: "SET_EXPENSES",
        expenses
    })
})

test("Testing the startSetExpenses actions", (done) => {
    const store = createStore({})
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "SET_EXPENSES",
            expenses
        })
        done()
    })

})


test("Testing the startRemoveExpense actions", (done) => {
    const store = createStore({})
    store.dispatch(startRemoveExpense({id:expenses[0].id})).then(()=> {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "REMOVE_EXPENSE",
            id:expenses[0].id
        })
        return get(ref(db, `expenses/${expenses[0].id}`)).then(snapshot => {
            expect(snapshot.val()).toBeFalsy();
        }).then(() => done());
    })
})