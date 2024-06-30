// work with express.js in node
const express = require("express");
const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const { student } = require("./src/route/student.route");
const { product } = require("./src/route/product.route");
const { category } = require("./src/route/category.route");
const { role } = require("./src/route/role.route");
const { user } = require("./src/route/user.route");
const { employee } = require("./src/route/employee.route");
const { customer } = require("./src/route/customer.route");
// const { objPerson, course, getName } = require("./data/user")//node import
// create route
app.get("/", (req, res) => {
    // var name = ["C++", "C#", "Java", "ReactJS", "NestJs",];//is array   
    res.send("Hello Node Express.js");
});
//call route
student(app);
product(app);
category(app);
role(app);
user(app);
employee(app);
customer(app);

// app.get("/student", (req, res) => {
//     const name = getName("Bopha");
//     res.send(name);
// });
// app.get("/course", (req, res) => {
//     res.send(course);
// });

const port = 8081;
app.listen(port, () => {
    console.log("http://localhost:" + port);
});

//localhost:8081/
//localhost:8081/student