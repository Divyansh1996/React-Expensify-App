import moment from "moment";

export default (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const momentCreatedAt = moment(expense.createdAt);
        const startMatch = startDate? startDate.isSameOrBefore(momentCreatedAt):true
        const endMatch = endDate? endDate.isSameOrAfter(momentCreatedAt):true
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
