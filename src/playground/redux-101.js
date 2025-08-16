import {createStore} from 'redux';

console.log("I am in redux");

const addFunction = ({incrementBy=1} = {}) => (
    {
        type:"INCREMENT", incrementBy
    }
)

const decrementFunction = ({decrementBy=1} = {}) => ({
    type: "DECREMENT",
    decrementBy
})

const ResetFunction = ({resetBy=0}= {}) => ({
    type:"RESET",
    resetBy:resetBy
})

const SetFunction = ({setBy=1}={}) => ({
    type:"SET",
    setBy:setBy
})


//Reducer arer pure function, means they use only input var to generate the output and not outer variable which is present outside of function.
//Never change the state, action argument, just read and use them.

const reducer = (state = {count:10}, action) => {

    switch(action.type){
        case 'INCREMENT': 
        return {
            count: state.count+ action.incrementBy
        }
        case 'DECREMENT': 
        return {
            count: state.count -action.decrementBy
        }
        case 'SET':
        return{
            count:action.setBy
         }   
        case 'RESET': return {
            count: action.resetBy
        }
        default: return state
    }
}

const store = createStore(reducer);


const unsubscribe = store.subscribe(()=> {
    console.log(store.getState())
})

store.dispatch(addFunction());

store.dispatch(addFunction({incrementBy:2}));

//unsubscribe();

store.dispatch(decrementFunction({decrementBy:10}));

store.dispatch(decrementFunction());

store.dispatch(ResetFunction())

store.dispatch(SetFunction({setBy:3}))

