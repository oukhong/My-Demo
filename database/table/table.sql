SELECT Name FROM category;


--- Create table with SQL

CREATE TABLE `categorytest` (
    `Id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `Name` varchar(120) NOT NULL UNIQUE,
    `Description` text DEFAULT NULL,
    `Status` tinyint(1) DEFAULT 1,
    `CreateAt` timestamp NOT NULL DEFAULT current_timestamp()
)

-- Role (Id Name Code Status CreateAt CreateBy)
CREATE TABLE `role` (
    `Id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `Name` varchar(120) NOT NULL UNIQUE,
    `Code` varchar(120) NOT NULL UNIQUE,
    `Status` tinyint(1) DEFAULT 1,
    `CreateAt` timestamp DEFAULT current_timestamp(),
    `CreateBy` varchar(225) DEFAULT NULL
);

-- Customer (Id Firstname Lastname Gender Dob Tel Email Address CreateAt)
-- CREATE TABLE `customer` (
--     `Id` INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
--     `Firstname` VARCHAR(255) NOT NULL,
--     `Lastname` VARCHAR(255) NOT NULL,
--     `Gender` TINYINT(1) DEFAULT 1, --0,1,3,...9
--     `Dob` DATETIME DEFAULT NULL,
--     `Tel` VARCHAR(18) NOT NULL,
--     `Email` VARCHAR(255) DEFAULT NULL,
--     `Address` VARCHAR(255) NOT NULL,
--     `CreateAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- )

-- Employee (Id Firstname Lastname Gender Dob Tel Email Address Salary Position CreateAt)
-- CREATE TABLE `employee` (
--     `Id` INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
--     `Firstname` VARCHAR(255) NOT NULL,
--     `Lastname` VARCHAR(255) NOT NULL,
--     `Gender` TINYINT(1) DEFAULT 1, --0,1,3,...9
--     `Dob` DATETIME DEFAULT NULL,
--     `Tel` VARCHAR(18) NOT NULL,
--     `Email` VARCHAR(255) DEFAULT NULL,
--     `Address` VARCHAR(255) NOT NULL,
--     `Salary` DECIMAL(7,2) DEFAULT 0,
--     `Position` VARCHAR(255) NOT NULL,
--     `CreateAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- )

--user (Id RoleId Username Password IsActive CreateAt)
--role(1) <-> user(M)
CREATE TABLE user (
    Id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, --PK |FK
    RoleId INT(11) DEFAULT NULL,
    Username VARCHAR(255) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    IsActive TINYINT(1) DEFAULT 1,
    CreateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--script Create table product  --
-- category(1) <-> product(M)
CREATE TABLE product (
    Id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, --PK |FK
    CategoryId INT(11), --FK
    Brand VARCHAR(255),
    Name VARCHAR(255) NOT NULL,
    Description VARCHAR(255),
    Price DECIMAL(6,2) DEFAULT 0,
    Quantity INT(7) DEFAULT 1,
    Image VARCHAR(255),
    Status TINYINT(1) DEFAULT 1,
    CreateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CreateBy VARCHAR(255)
);

--role - Employee--
--Employee
CREATE TABLE employee (
    Id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, --PK |FK
    RoleId INT(11), --FK
    CardId VARCHAR(20) NOT NULL,
    Firstname VARCHAR(255) NOT NULL,
    Lastname VARCHAR(255) NOT NULL,
    Gender TINYINT(1) DEFAULT 1,
    Dob DATETIME NOT NULL,
    Tel VARCHAR(18) NOT NULL,
    Email VARCHAR(120),
    Address Text,
    BaseSalary DECIMAL(6,2) DEFAULT 0,
    Position VARCHAR(120) NOT NULL,
    Image VARCHAR(255),
    Status TINYINT(1) DEFAULT 1,
    CreateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CreateBy VARCHAR(255)
);

-- Customer
CREATE TABLE customer (
    Id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, --PK |FK
    Firstname VARCHAR(255) NOT NULL,
    Lastname VARCHAR(255) NOT NULL,
    Gender TINYINT(1) DEFAULT 1,
    Dob DATETIME NOT NULL,
    Tel VARCHAR(18) NOT NULL,
    Email VARCHAR(120),
    Address Text,
    Image VARCHAR(255),
    Status TINYINT(1) DEFAULT 1,
    CreateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CreateBy VARCHAR(255)
);