
Stap1
> node index.js // run file index.js
> clear //

-add in index.js script
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

-----------------------------------------------
>Set-ExecutionPolicy RemoteSigned -Scope CurrentUser    
stap2
-Create node module and plugin express

*create folder "node-api"
*goto terminal to root "node-api"
    > cd node-api
    > npm init // create package node
        - yes .... until finish
    > npm install express // plugin module/package in node project
*Create index.js in "node-api"

    add 
            // work with express.js in node
    const express = require ("express");
    const app = express();

    // create route
    app.get("/",(req,res)=>{
        res.send("Hello Welcome Node.js and Express");
    });
    app.get("/student",(req,res)=>{
        res.send("Hello Student");
    });

    const port = 8081;
    app.listen(port, () => {
        console.log("http://localhost:" + port);
    });
-run node
    > node index.js

    //localhost:8081
    //localhost:8081/student

-Lession Part6
*student
*teacher

-lession part7 
*review part1 - part6

-lession part8
*Postman
-lession part9
http method
*get
*post
*put
*delete

-lession part10
npm install -g nodemon
nodemon -v //check version 

-lession part11
review express in node 

-lession part12
*query parameter

-lession part13
*params parameter

-lession part14
*body json parameter

-lession part15
*install xampp + mysql

-lession part16
*create database and table

-lession sql basic part17
*Database
*Create Table
    Category
        Id Name Description Status CreateAt
Table Data Type
PK  Primary Key

SQL SELECT
    SELECT * FROM TableName;
    SELECT * FROM category;
    SELECT Id, Name, Status FROM category;
SQL INSERT
    INSERT INTO TableName (col1,col2,...) VALUES (value1,value2,,,)
    INSERT INTO category (Name,Description,Status) VALUES ('Computer','Description Computer',1);
    INSERT INTO category (Name,Description,Status) VALUES ('Phone','Description Phone',1);
    INSERT INTO category (Name,Description,Status) VALUES ('Monitor','Description Monitor',0);


    //multiple record
    INSERT INTO category (Name,Description,Status) VALUES
     ('Test101','Description Test101',0),
     ('Test102','Description Test102',1),
     ('Test103','Description Test103',1),
     ('Test104','Description Test104',0);

SQL DELETE
    DELETE FROM TableName Condition
    DELETE FROM category WHERE Id = 7;
SQL UPDATE
    UPDATE TableName SET Col1=Value1, Col2=Value2, .... Condition
    UPDATE category SET Name='106', Status=0 WHERE Id = 6;


SQL WHERE 
SQL AND RO, LIKE, BETWEEN, COUNT, SUM, AS
SQL ORDER BY (ASC,DESC)

SELECT * FROM category WHERE Status = 0;
SELECT * FROM category WHERE Name LIKE '%st%';//%s%
SELECT * FROM product WHERE Price BETWEEN 10 AND 20;
SELECT SUM(Qty) FROM product WHERE Status = 1;
SELECT COUNT(Id) FROM category;
SELECT COUNT(Id) AS totalRecord FROM category;
SELECT COUNT(Id) AS totalRecord FROM category WHERE Status = 1;
SELECT SUM(Status) as TotalSum  from category

SELECT * FROM category ORDER BY Id DESC;

-lession part18
*Review SQL

-lessiong part19
*sql create table
CREATE TABLE `employee` (
    `Id` INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `Firstname` VARCHAR(255) NOT NULL,
    `Lastname` VARCHAR(255) NOT NULL,
    `Gender` TINYINT(1) DEFAULT 1, --0,1,3,...9
    `Dob` DATETIME DEFAULT NULL,
    `Tel` VARCHAR(18) NOT NULL,
    `Email` VARCHAR(255) DEFAULT NULL,
    `Address` VARCHAR(255) NOT NULL,
    `Salary` DECIMAL(7,2) DEFAULT 0,
    `Position` VARCHAR(255) NOT NULL,
    `CreateAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

-lession part20
*primary key and foreign key
    -foreign key
        ALTER TABLE user
        ADD FOREIGN KEY (RoleId) REFERENCES role(Id);

-lession part21 
->ping to file name: connection_db.txt
-nodejs connect to mysql and list data part21
// install in node js
> npm install mysql2

//create connection file


const mysql = require("mysql2/promise");
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "g7_db",
    port: 6306, //3306
    namedPlaceholders: true,
});
module.exports = db;

-lession part22
* api category getList and getOne by id

-lession part29
npm install bcript

var hashPassword = bcript.hashSync(Password, 10); 12345 =>dfjdasfkfs-18765433224-349595689
var isCorrectPassword = bcript.compareSync(Password, user.Password); //true or false