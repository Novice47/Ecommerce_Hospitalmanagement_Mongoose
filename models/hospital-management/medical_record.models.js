import mongoose from "mongosoe"

const medicalRecordSchema=new mongoose.Schema({},{timestamps:true})

export const MedicalRecord=mongoose.models('MedicalRecord',medicalRecordSchema);
