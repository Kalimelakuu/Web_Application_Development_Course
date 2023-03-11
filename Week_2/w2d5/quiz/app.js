const express = require("express");
const app = express();

var home = require("./login.js");

app.listen(8080, () => {
  console.log("Your Server is running on 8080");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log("This is always run");
  next();
});
// app.use("/add-product", (req, res, next) => {
//   console.log("In the middleware!");
//   res.send('<h1>The "Add Product" Page</h1>');
// });

// app.use('/add-product', (req, res, next) => {
//     console.log('In the middleware!');
//     res.send('<form action="/product" method="post"><input name="title"><button type="submit">Submit</button></form>');
//     });

//     app.use('/product', (req, res, next) => {
//     console.log(req.body); // { title: 'book' }
//     res.redirect('/');
//     });

    app.use("/", home);

// app.use("/", (req, res, next) => {
//     console.log("In another middleware!");
//     res.send("<h1>Hello from Express</h1>");
//     });

