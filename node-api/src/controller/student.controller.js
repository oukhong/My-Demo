const db = require("../util/db");

// parameter ; query , params, body
const list = async (req, res) => {
    // get data from database
    var paramsSql = {
        Id: req.query.Id,
    };
    const [data] = await db.query("SELECT * FROM category WHERE Id = :Id", paramsSql);
    res.json({
        list_category: data,
    });
};
const listById = (req, res) => {
    res.json({
        data: req.params,
    });
};
const create = (req, res) => {
    // var id = req.body.id;
    // var name = req.body.name;
    // sql = "INSERT INTO Student (id,name) VALues (?,?)"
    res.json({
        data: req.body,
    });
};
const update = (req, res) => {
    res.send("Update Student Controller");
};
const remove = (req, res) => {
    res.send("Remove Student Controller");
};

module.exports = {
    list,
    create,
    update,
    remove,
    listById,
};
