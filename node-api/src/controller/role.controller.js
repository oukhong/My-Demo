const db = require("../util/db");

const getList = async (req, res) => {
    const [data] = await db.query("SELECT * FROM role");
    res.json({
        list: data,
    });
};
const getOne = async (req, res) => {
    var paramSql = {
        Id: req.params.Id,
    };
    const [data] = await db.query("SELECT * FROM role WHERE Id = :Id", paramSql);
    res.json({
        list: data,
    });
};
const create = async (req, res) => {
    // post body(json)
    var param = {
        Name: req.body.Name,
        Code: req.body.Code,
        Status: req.body.Status,
    };
    var sqlInsert = "INSERT INTO role (Name,Code,Status) VALUES (:Name,:Code,:Status)";
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
        Code: req.body.Code,
        Status: req.body.Status,
    };
    var sqlUpdate = "UPDATE role SET  Name=:Name, Status=:Status, Code=:Code WHERE Id = :Id;";
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
    var sqlDelete = "DELETE FROM role WHERE Id = :Id";
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