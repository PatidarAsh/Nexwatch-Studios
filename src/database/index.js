import mongoose from "mongoose";
require('dotenv').config();

const connectToDB = async () =>{
    try{
        await mongoose.connect("mongodb+srv://ashvinipatidar96:Swapnil040897@cluster0.f6zfyl0.mongodb.net/");
        console.log( 'MongoDB Connected...');
        
    }catch(err){
        console.error( err);
    }
}

export default connectToDB;