// //importing modules
// const express = require("express");
// const db = require("../models");

// //Assigning db.users to User variable
// const User = db.users;
// console.log(User)

// //Function to check if username or email already exist in the database
// //this is to avoid having two users with the same username and email
// const saveUser = async (req, res) => {
//   //search the database to see if user exist
//   try {
//     const username = await User.findOne({
//       where: {
//         userName: req.body.userName,
//       }
//     });
//     // //if username exist in the database respond with a status of 409
//     if (username!==null) {
//       return res.json(409).send("username already taken");
//     }

//     //checking if email already exist
//     const emailcheck = await User.findOne({
//       where: {
//         email: req.body.email,
//       }
//     });

//     // //if email exist in the database respond with a status of 409
//     if (emailcheck!==null) {
//       return res.json(409).send("Authentication failed");
//     }


//    signup()
//   } catch (error) {
//     console.log(error);
//   }
// };

// //exporting module
// module.exports = {
//   saveUser,
// };
