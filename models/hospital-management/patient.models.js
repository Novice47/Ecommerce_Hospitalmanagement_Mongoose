import mongoose from "mongosoe"

const patientSchema=new mongoose.Schema({

  name:{
    type:String,
    required:true
  },
  diagonsedWith:{
    type:String,
    required:true,

  },
  address:{
    type:String,
    required:true,

  },
  age:{
    type:Number,
    required:true,

  },
  gender:{
    type:String,
    enum:["M","F","O"],
    required:true

  },
  bloodGroup:{
    type:String,
    required:true,

  },

  admittedIn:{

    type:mongoose.Schema.Types.ObjectId,
    ref:"hospital",
  }
},{timestamps:true})

export const  Patient=mongoose.models('Patient',patientSchema);
