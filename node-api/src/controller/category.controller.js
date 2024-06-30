const db = require("../util/db");

const getList = async (req, res) => {
    const [data] = await db.query("SELECT * FROM category");
    const [count] = await db.query("SELECT COUNT(Id) AS TotalRecord FROM category");
    res.json({
        totalRecord: count,
        list: data,
    });
};
const getOne = async (req, res) => {
    var paramSql = {
        Id: req.params.Id,
    };
    const [data] = await db.query("SELECT * FROM category WHERE Id = :Id", paramSql);
    res.json({
        list: data,
    });
};
const create = async (req, res) => {
    // post body(json)
    var param = {
        Name: req.body.Name,
        Description: req.body.Description,
        Status: req.body.Status,
    };
    var sqlInsert = "INSERT INTO category (Name,Description,Status) VALUES (:Name,:Description,:Status)";
    const [data] = await db.query(sqlInsert, param);
    res.json({
        message: "insert success",
        data: data,
    });
};
const update = async (req, res) => {
    // put body(json)
    var param = {
        Id: req.body.Id,
        Name: req.body.Name,
        Description: req.body.Description,
        Status: req.body.Status,
    };
    var sqlUpdate = "UPDATE category SET  Name=:Name, Status=:Status, Description=:Description WHERE Id = :Id;";
    const [data] = await db.query(sqlUpdate, param);
    res.json({
        message: "Update success",
        data: data,
    });
};
const remove = async (req, res) => {
    // Delete body(json)
    var param = {
        Id: req.body.Id,
    };
    var sqlDelete = "DELETE FROM category WHERE Id = :Id";
    const [data] = await db.query(sqlDelete, param);
    res.json({
        message: "Delete success",
        data: data,
    });
};

module.exports = {
    getList,
    getOne,
    create,
    update,
    remove,
};