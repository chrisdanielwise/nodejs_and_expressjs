const mongoose = require('mongoose')

const connectDB = async ()=>{
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING)
        console.log("Database connected: ", connect.connect.host,connect.connect.name)
    } catch (error) {
        
    }
}
module.exports = connectDB