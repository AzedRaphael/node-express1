const express = require("express")
const mongoose = require("mongoose")
const Schema = mongoose.Schema;

//its the theme that the model wrapps around with diff pprt and value. it gives the document a structure
//the model is based on the schema. it surround the schema and provides an interface to communicxate with the db.

const blogSchema = new Schema({
    title: {
        type:String,
        required:true,
    },
    snippet:{
        type:String,
        required: true,
    },
    body : {
        type:String,
        required: true
    }
}, {timestamps: true});

const Blog = mongoose.model("Blog",blogSchema);

module.exports = Blog;