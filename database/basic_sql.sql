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
CREATE TABLE `customer` (
    `Id` INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `Firstname` VARCHAR(255) NOT NULL,
    `Lastname` VARCHAR(255) NOT NULL,
    `Gender` TINYINT(1) DEFAULT 1, --0,1,3,...9
    `Dob` DATETIME DEFAULT NULL,
    `Tel` VARCHAR(18) NOT NULL,
    `Email` VARCHAR(255) DEFAULT NULL,
    `Address` VARCHAR(255) NOT NULL,
    `CreateAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

-- Employee (Id Firstname Lastname Gender Dob Tel Email Address Salary Position CreateAt)
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