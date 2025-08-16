import moment from "moment";
import filterReducer from "../../reducers/filter";

test("Testing the filter reducer method with action type as @@INIT", ()=> {
    const defaultValues= {
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
    const state =  filterReducer(undefined, {type:"@@INIT"})
    expect(state).toEqual(defaultValues)
})

test("Testing the filter reducer method with action type as SORT_BY_AMOUNT", () => {
    const state = filterReducer(undefined, {type:"SORT_BY_AMOUNT"})
    expect(state.sortBy).toBe("amount")
})

test("Testing the filter reducer method with action type as SORT_BY_DATE", () => {
    const currentState= {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
    
    const state = filterReducer(currentState, {type:"SORT_BY_DATE"})
    expect(state.sortBy).toBe("date")
})

test("Testing the filter reducer method with action type as EDIT_TEXT", () => {
    
    const state = filterReducer(undefined, {type:"EDIT_TEXT", text:"newText"})
    expect(state.text).toBe("newText")
})

test("Testing the filter reducer method with action type as SET_START_DATE", () => {
    const defaultValues= {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const state = filterReducer(defaultValues, {type:"SET_START_DATE", startDate:moment().startOf('month')})
    expect(state.startDate).toEqual(moment().startOf('month'))
})

test("Testing the filter reducer method with action type as SET_END_DATE", () => {
    const defaultValues= {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const state = filterReducer(defaultValues, {type:"SET_END_DATE", endDate:moment().startOf('month')})
    expect(state.endDate).toEqual(moment().startOf('month'))
})