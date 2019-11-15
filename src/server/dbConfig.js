const mongoose=require('mongoose')

mongoose.connect("mongodb://localhost:27017/test")
const connection=mongoose.connection

connection.on('error',console.error.bind(console,'connection error'))
connection.on('open',()=>{
    console.log('connected to the database')
})

module.exports = connection;