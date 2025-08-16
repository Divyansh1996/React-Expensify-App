const expenseStateDefaultValues = [];

export default (state=expenseStateDefaultValues, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [...state, action.expense]
        case 'REMOVE_EXPENSE':
            const newState = state.filter(({id}) => id !== action.id)
            return newState;
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id){
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
