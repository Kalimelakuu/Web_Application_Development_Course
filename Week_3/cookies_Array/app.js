const express = require("express");
const app = express();
const ejs = require("ejs");
const cookieParse = require("cookie-parser");
const path = require("path");

app.listen(1200, function (req, res, next) {
  console.log("Server Started");
});

app.use(cookieParse());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res, next) {
  res.sendFile(path.join(__dirname, "", "index.html"));
});
app.get("/home", function (req, res, next) {
  res.sendFile(path.join(__dirname, "", "index.html"));
});

app.post("/credential", function (req, res, next) {
  let name = req.body.name;
  let pass = req.body.pass;

  let cookieArrayUser = req.cookies.arrayUsers;
  let obj = { Name: name, Password: pass };

  if (cookieArrayUser) {
    for (let val of cookieArrayUser) {
      if (val.Name == name && val.Password == pass) {
          res.send("You're Logged In " + name.toUpperCase());
      }else if(val.Name == name && val.Password != pass){
        res.send("Please Your Credential is not correct " );
      }else{
        cookieArrayUser.push(obj);
        res.cookie("arrayUsers", cookieArrayUser);
        // res.send(cookieArrayUser)
        res.redirect("back");

      }
    }
  } else {
    cookieArrayUser == null
      ? (cookieArrayUser = [])
      : (cookieArrayUser = cookieArrayUser);
    cookieArrayUser.push(obj);
    res.cookie("arrayUsers", cookieArrayUser);
    // res.send(cookieArrayUser)
    res.redirect("back");
  }
});

app.post("/login", function (req, res, next) {
  let cookieArray = req.cookies.array;
  let fruitName = req.body.fruit;

  if (cookieArray) {
    cookieArray.push(fruitName);
  } else {
    cookieArray = ["Apple", "Banana"];
    cookieArray.push(fruitName);
  }
  res.cookie("array", cookieArray);
  res.send(cookieArray);
});
