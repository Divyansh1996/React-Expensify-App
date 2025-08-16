import { addExpense, removeExpense, editExpense } from "../../actions/expenses";
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

test("Testing the Add Expense action with provided values", ()=>{
    const expenseData = {
        description: 'Rent',
        note: 'A new Rent',
        amount: 12345,
        createdAt: 1000
    }
    const result = addExpense(expenseData)
    expect(result).toEqual({
        expense:{...expenseData, id:expect.any(String)}, 
        type:"ADD_EXPENSE"}
    )
})

test("Testing the Add Expense action without any values", () => {
    const result = addExpense();
    expect(result).toEqual({
        type:"ADD_EXPENSE",
        expense:{
            id:expect.any(String),
            description:'',
            note:'',
            amount:0,
            createdAt:''
        }
    })
})