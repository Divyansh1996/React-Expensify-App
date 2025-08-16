import moment from 'moment';
import {setStartDate, setEndDate, sortByAmount, sortByDate, editText} from '../../actions/filter';

test("Testing setStartDate Method", ()=> {
    const result = setStartDate(moment(0))
    expect(result).toEqual({
        type:"SET_START_DATE",
        startDate: moment(0)
    })
})


test("Testing setEndDate Method", ()=> {
    const result = setEndDate(moment(0))
    expect(result).toEqual({
        type:"SET_END_DATE",
        endDate: moment(0)
    })
})

test("Testing the sortByAmount Method", () => {
    expect(sortByAmount()).toEqual({
        type:"SORT_BY_AMOUNT"
    })
})

test("Testing the sortByDate Method", () => {
    expect(sortByDate()).toEqual({
        type:"SORT_BY_DATE"
    })
})

test("Testing the editText Method with provided values", () => {
    expect(editText('abc')).toEqual({
        type:"EDIT_TEXT",
        text:'abc'
    })
})

test("Testing the editText Method with no values", () => {
    expect(editText()).toEqual({
        type:"EDIT_TEXT",
        text:''
    })
})