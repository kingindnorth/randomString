const express = require("express")
const { v4: uuidv4 } = require('uuid');

const app = express()

const randomString = uuidv4();
console.log(randomString);

app.listen(2222,()=>{
    console.log(`server running`)
})