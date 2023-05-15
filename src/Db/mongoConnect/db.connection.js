import mongoose from "mongoose";


const mongodb_connection = async () =>{
    try {
     const conn =  await mongoose.connect(process.env.NEXT_PUBLIC_DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
       
    })
        console.log(`MongoDB Connected`)
   

    } catch (error) {
        throw new Error("Couldn't connect to MongoDB " + error.message );
    }

}


export default mongodb_connection;