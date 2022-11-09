import mongoose from "mongoose";

const User = mongoose.Schema({
    nik:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    tanggllahir:{
        type: String,
        required: true
    },
    alamat:{
        type: String,
        required: true
    },
    negara:{
        type: String,
        required: true
    },
});

export default mongoose.model('Users', User);