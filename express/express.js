
const express = require("express");
// const fetch = require("node-fetch"); // If Node.js version <18

const app = express();

app.get("/users", async (req, res) => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        res.json(data); // send data as JSON response
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong" });
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));

// or app.listen(3000); // server starts, but no message printed


// 1️⃣ const express = require("express");

// Purpose: This imports the Express library so you can use it in your project.

// require("express") is Node.js’s way of loading a module.

// const express = ... → stores the imported module in the variable express.

// ✅ Think of it like Python:

// import flask
// app = flask.Flask(__name__)


// flask is the imported module → same as express here.

// 2️⃣ const fetch = require("node-fetch");

// Purpose: In Node.js (server-side JS), fetch() is not built-in in versions <18.

// node-fetch is a library that provides the fetch() function similar to browsers.

// const fetch = require("node-fetch") imports it so you can use fetch() in your server code.

// ✅ In Python, this is like:

// import requests

// 3️⃣ const app = express();

// Purpose: Creates an Express application instance.

// express() here is a function exported by the Express module, not the variable express itself.

// app is now your main server object where you define routes, middleware, etc.

// So:

// const express = require("express");
// const app = express();


// express → the library

// app → your server instance (can be named anything, e.g., server = express() works too)

// 4️⃣ app.get("/users", async (req, res) => { ... })

// Purpose: Defines a route in your Express app.

// "/users" → the URL path that clients can visit.

// Example: http://localhost:3000/users

// Anything inside the function runs when a GET request is made to that URL.

// req → the request object (data from client)

// res → the response object (how you send data back)

// ✅ Analogy in Python Flask:

// from flask import Flask, jsonify
// app = Flask(__name__)

// @app.route("/users")
// def users():
//     return jsonify(data)


// @app.route("/users") → same as app.get("/users", ...) in Express.

// 🔹 Built-in vs Changeable?
// Part	Built-in / Library	Can you rename?
// express	Library (npm package)	Variable name express is your choice
// fetch	Library (node-fetch) or built-in in browser	Variable name fetch is your choice
// app	Instance of Express	You can rename it (e.g., server = express())
// "/users"	URL route	You can change to anything like "/api/users"

// So in short:

// express → library

// app → your server instance

// fetch → library function to fetch data

// "/users" → URL path for clients to request