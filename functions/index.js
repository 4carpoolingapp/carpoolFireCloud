const functions = require("firebase-functions");
const firebase = require("firebase");
const admin = require("firebase-admin");
const app = require("express")();

admin.initializeApp();
firebase.initializeApp(config);
const db = admin.firestore();

// PLEASE INITIALIZE YOUR CONFIG DATA HERE
const config = {
  // apiKey:
  // authDomain:
  // databaseURL:
  // projectId:
  // storageBucket:
  // messagingSenderId:
  // appId:
};

/* 
IN THIS FUNCTIONs YOU SHOULD WRITE A CODE TO GET ALL/SINGLE COUSES,  FROM A COLLECTION
NAMED /courses/ EVERYONE EXACTLY SHOULD NAME THEIR DATABASE COLLECTION NAME 
WITH THE SAME NAME SO THAT OTHERS ALSO COULD TEST IT.
WHEN CREATING A DATA PLEASE FOLLOW DATA STRUCTURE IN THE NOTES FOLDER
*/
const getCourses = (req, res) => {};

// GETTING A SINGLE COURSE FROM COLECTION
const getSingleCourse = (req, res) => {};

// CREATING A CORSE AND ADDING IT TO COLLECTION
const createCourse = (req, res) => {};

// UPDATING A COURSE WHICH IS IN THE COLLECTION
const updateCourse = (req, res) => {};

app.get("/course/getCourses", getCourses);
app.get("/course/getSingleCouse:id", getSingleCourse);
app.post("/course/createCourse", createCourse);
app.put("/course/updateCourse:id", updateCourse);

exports.api = functions.region("europe-west1").https.onRequest(app);
