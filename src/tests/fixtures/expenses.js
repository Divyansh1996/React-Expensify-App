import moment from "moment"

export default [{
    id:'1',
    description: "Rent",
    note: '',
    amount: 1250,
    createdAt:moment(0).valueOf()
},
{
    id:'2',
    description: "Gas Bill",
    note: '',
    amount: 1350,
    createdAt:moment(0).subtract(4,'days').valueOf()
},
{
    id:'3',
    description: "Water Bill",
    note: '',
    amount: 1550,
    createdAt:moment(0).add(4,'days').valueOf()
}]