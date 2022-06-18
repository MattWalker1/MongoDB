
// Create a Neural Network
const network = new brain.NeuralNetwork();

// Train the Network with 4 input objects
network.train([
 {input:[0,0], output:{zero:1}},
 {input:[0,1], output:{one:1}},
 {input:[1,0], output:{one:1},
 {input:[1,1], output:{zero:1},
]);

// What is the expected output of [1,0]?
result = network.run([1,0]);

// Display the probability for "zero" and "one"
return result["one"] + " " + result["zero"];
console.log(result);