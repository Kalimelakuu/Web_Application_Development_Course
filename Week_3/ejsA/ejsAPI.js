const express = require("express");
const app = express();
// const cookieParse = require("cookie-parser");
var path = require("path");
var ejs = require("ejs");

app.listen(80, () => {
  console.log("Your Server is running on 3000");
});

// app.use(cookieParse());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//EJS Engine
app.set("view engine", "html");
app.engine("html", ejs.renderFile);
// app.set('views', path.join(__dirname,"myDir"));

// app.get("/admin", function (req, res, next) {
//     res.render("index", { list: ["apple", "banana"] })
// });

let myTabel = { color: ["color", "blue"], flowers: ["rose", "tulip"] };
let form = {
  name: "Ram",
  age: "30",
  skills: ["java", "javascript"],
  selectedSkill: "java",
};

app.get("/admin", function (req, res, next) {
  res.render("index2", {
    num4: {
      name: { value: "Ram", isEdit: false },
      age: { value: 30, isEdit: true },
      skills: {
        value: "javascript",
        list: ["java", "javascript"],
        isEdit: false,
      },
    },
    num4: {
      name: "Ram",
      age: "30",
      skills: { list: ["java", "javascript"], value: "javascript" },
    },
    num2: [
      {
        name: "Ram",
        courses: ["java", "javascript"],
      },
      {
        name: "Shyam",
        courses: ["Python", "Angular"],
      },
    ],
    num1: { Title: "Header", text: "My Paragraph" },
    form2: {
      Name: "Ram",
      Courses: { Java: 2, Javascript: 3 },
      Location: "Fairfield",
      Availability: "Immediate",
    },
    form: {
      name: { value: "Sam", isEdit: false },
      age: { value: 30, isEdit: true },
      skills: { value: ["java", "javascript"], isEdit: true },
      shooping: {
        value: { a: "Java", b: "Python", c: "Javascript", d: "Spring" },
        selected: true,
      },
    },
  });
});
