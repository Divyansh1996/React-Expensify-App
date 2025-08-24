onChildRemoved(ref(db,'expenses'), (snapshot) => {
  console.log(snapshot)
})

onChildChanged(ref(db, 'expenses'), (snapshot) => {
  console.log(snapshot)
})

onChildAdded(ref(db, 'expenses'), (snapshot) => {
  console.log(snapshot.key, snapshot.val())
})

push(ref(db, 'expenses'), {
   description: "Description for Water Bill",
  notes: "Notes for the Water Bill",
  name: "Water Bill",
  amount: 1440
})

let expenses = []
get(ref(db,'expenses')).then((snapshot) => {
  console.log("GET")
  snapshot.forEach((childSnapshot) => {
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val()
    })
  })
})

onValue(ref(db,'expenses'), (snapshot)=> {
  console.log("SUBSCRIPTION")
  expenses = []
  snapshot.forEach((childSnapshot) => {
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val()
    })
  })
  console.log(expenses)
})

get(ref(db)).then((snapshot) => {
  console.log("GET RESULT", snapshot.val())
})

onValue(ref(db), (snapshot) => {
  const content = snapshot.val();
  console.log(`${content.name} is a ${content.job.title} at ${content.job.company}`)
})

update(ref(db), {
  "name":"Durgesh"
})

push(ref(db, 'expenses'),{
  description: "Description for Gas Bill",
  notes: "Notes for the Gas Bill",
  name: "Gas Bill",
  amount: 1220
})

push(ref(db, 'expenses'),{
  description: "Description for Water Bill",
  notes: "Notes for the Water Bill",
  name: "Water Bill",
  amount: 1440
})

push(ref(db,'expenses'),{
  description: "Description for Electricity Bill",
  notes: "Notes for the Electricity Bill",
  name: "Electricity Bill",
  amount: 1540
})

console.log("log 1")
get(ref(db)).then((snapshot)=> {
  console.log("GET result:",snapshot.val())
})

console.log("log 2")
const unsubscribe = onValue(ref(db), (snapshot) => {
  console.log("Subscription update:",snapshot.val())
}, (e) => {
  console.log("error", e)
})

unsubscribe()

console.log("log 3")
update(ref(db), {
  "location/city": "Raipur"
})
console.log("log 4")
set(ref(db),{
  "name": "Divyansh Agrawal",
  "age": 32,
  "location":{
    "city": "Philidalpia",
    "country":"USA"
  },
  "isSingle": false,
  "stressLevel": 6,
  "job": {
    "title": "Software Developer",
    "company": "Google"
  }
}).then(() => {
  console.log("Setting the data is successful")
}).catch((error) => {
  console.log("Setting the data is not successful:", error)
})

update(ref(db), {
  "stressLevel": 9,
  "job/company": "Amazon",
  "location/city": "Seattle"
}).then(() => {
  console.log("Data is updated")
}).catch((e) => {
  console.log("Data:", e)
})

set(ref(db, "location/city"),"Raipur")
set(ref(db,"attributes"), {"height":11,"weight":67})

set(ref(db,'isSingle'), null)

remove(ref(db)).then(()=>{
  console.log("Data is removed")
}).catch((e) => {
  console.log(e)
})