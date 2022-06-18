// mongodb+srv://Mattwalker1:alibaba@cluster0.zgeee.mongodb.net/?retryWrites=true&w=majority
const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
//const uri = "mongodb+srv://Mattwalker1:alibaba@Cluster0.zgeee.mongodb.net/?retryWrites=true&w=majority";
const { mongoose } = require ("mongoose");
{ mongoose } connect("mongodb+srv://Mattwalker1:alibaba@Cluster0.zgeee.mongodb.net/?retryWrites=true&w=majority");
const client = new MongoClient(uri);

run()
async function run() {
const user = new user({ name: "kyle", age: 26})
  await user.save() 
  (console.log(user));
}