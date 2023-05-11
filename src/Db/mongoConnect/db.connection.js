const mongoose = require('mongoose');


const mongodb_connection = async () =>{
    try {
     const conn =  await mongoose.connect("mongodb+srv://akhaneisob:arif310@cluster0.7xyixxj.mongodb.net/Akhanei_Sob", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
       
    })
        console.log(`MongoDB Connected: ${conn.connection.host}`)
   

    } catch (error) {
        throw new Error("Couldn't connect to MongoDB " + error.message );
    }

}


module.exports = mongodb_connection;