const validator = require('./index.js');

/* const schema = {
  name: { type: "string", length: 10, required: true },
  age: { type: "number", min: 18 },
  hobbies: { type: "array", length: 3 },
  married: { type: "boolean", required: true },
}; */

let json = {
  "name": "John Doe",
  "age": 29,
  "email": "john@example.com",
  "hobbies": ["reading", "swimming"]
};

let schema = {
  "name": { "type": "string", "length": 8 },
  "age": { "type": "number", "min": 18, "max": 65 },
  "email": { "type": "string" },
  "hobbies": { "type": "array", "length": 2 }
};


/* const json = {
  name: "John Doe",
  age: 20,
  hobbies: ["reading", "coding", "swimming"],
  married: false,
}; */

/* try {
  validateJSON(json, schema);
  console.log("JSON object is valid");
} catch (error) {
  console.error(`JSON object is invalid: ${error.message}`);
} */