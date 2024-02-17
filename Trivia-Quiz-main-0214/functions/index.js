/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const functions = require("firebase-functions");
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const questions = require("./questions");
const bodyParser = require('body-parser')
const candidate = require("./routes/candidate");
const genders = require("./genders");
const ages = require("./ages");

const app = express();
//require("dotenv").config()



//app.use(express.json());
 app.use(bodyParser.json({limit: '35mb'}));


// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//     limit: '35mb',
//     parameterLimit: 50000,
//   }),
// );

const corsOptions ={
  origin:'*', 
  //credentials:true,            //access-control-allow-credentials:true
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionSuccessStatus:200,
  "Access-Control-Request-Headers": 'Content-Type',
  
}

//app.use(cors()) // Use this after the variable declaration
app.use(cors(corsOptions)) // Use this after the variable declaration

app.use("/api/candidate", candidate);

mongoose.set("strictQuery", false);

//const URI = "mongodb://localhost:27017/FYP"
const URI ="mongodb+srv://fyptest:Test1234@fyp.ev8sv62.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(URI, {})
    .then(()=> console.log("database connected"))
    .catch((err) => console.log("MongoDB connection failed", err.message))


app.get("/",(req, res) =>{
    res.send("Welcome to the questionaire API");

});

app.get("/questions",(req, res) =>{
    res.send(questions);

});

app.get("/genders",(req, res) =>{
    res.send(genders);

});

app.get("/ages",(req, res) =>{
    res.send(ages);

});



//const port = process.env.PORT || 5000
//app.listen(5000, console.log(`Server running on port ${port}`));
//app.listen(5000, console.log(`Server running on port 5000`));

exports.app = functions.https.onRequest(app);