import mongoose from "mongoose";


const connectToDatabase=async()=>{
    try {
        const URL ='';
        mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true})

        console.log("Database connected Successfully");
        
    } catch (error) {
        console.log("could not connect to database");
    }
}