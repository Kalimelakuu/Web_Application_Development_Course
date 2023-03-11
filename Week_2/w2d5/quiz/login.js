const express = require("express");
const path = require("path");
const login = express.Router();
let userData = [];
let role;
let objects = {
  guest: ["Nuts", "Legumes"],
  owner: ["Vegetables", "Nuts", "Fruits", "Legumes"],
};

login.use(function (req, res, next) {
  console.log("This is the login routing page loading");
  next();
});

login.get("/", function (req, res, next) {
  res.sendFile(path.join(__dirname, "", "login.html"));
});

login.post("/postMethod", userCredntialCheckerfunction);
login.get("/home", homePage);
login.post("/postSelectValues", isAuthorizedForCategory, authorizedRole);
login.get("/authorizedPage", ifAuthorized);

function userCredntialCheckerfunction(req, res, next) {
  if (
    (req.body.name == "guest" && req.body.password == "guest") ||
    (req.body.name == "owner" && req.body.password == "owner")
  ) {
    role = req.body.name == "guest" ? "guest" : "owner";
    userData = [];
    userData.push(role);
    res.redirect("/home");
  } else {
    res.redirect("/error");
  }
}
function ifAuthorized(req, res, next) {
  res.sendFile(path.join(__dirname, "", "authorizedPage.html"));
}
function isAuthorizedForCategory(req, res, next) {
   if (objects[role].includes(req.body.fruits)) {
    next();
  } else {
    res.redirect("/error");
  }
}
function authorizedRole(req, res, next) {
  res.redirect("/authorizedPage");
}

function homePage(req, res, next) {
  res.sendFile(path.join(__dirname, "", "home.html"));
}

login.get("/myarray", function (req, res, next) {
  res.json(objects);
});
login.get("/userRole", function (req, res, next) {
  res.json(userData);
});

login.use(function (req, res, next) {
  console.log("Error page of the login form");
  res.sendFile(path.join(__dirname, "", "error.html"));
});

module.exports = login;
