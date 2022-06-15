// mongodb+srv://Mattwalker1:alibaba@cluster0.zgeee.mongodb.net/?retryWrites=true&w=majority
// git hash first commit - 9e893ca967dbd04e1e52cdec43dbad18ac1b5bf7

const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://Mattwalker1:alibaba@Cluster0.zgeee.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    const database = client.db('sample_mflix');
    const movies = database.collection('movies');
    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Titanic' };
    const movie = await movies.findOne(query);
    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);





//trump trump trump 
//trump trump trump 
//trump trump trump 
//trump trump trump 
