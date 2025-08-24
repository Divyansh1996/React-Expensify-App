import Enzyme from "enzyme"
import Adapter from "enzyme-adapter-react-16"

Enzyme.configure({
    adapter: new Adapter()
})
require('dotenv').config({path: '.env.test'})
process.env.FIREBASE_DATABASE_URL = "https://expensify-app-test-5fe91-default-rtdb.firebaseio.com";