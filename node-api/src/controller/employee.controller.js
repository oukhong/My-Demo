const db = require("../util/db");

const getList = async (req, res) => {
    const [data] = await db.query("SELECT * FROM employee");
    res.json({
        list: data,
    });
};
const getOne = async (req, res) => {
    var paramSql = {
        Id: req.params.Id,
    };
    const [data] = await db.query("SELECT * FROM employee WHERE Id = :Id", paramSql);
    res.json({
        list: data,
    });
};
const create = async (req, res) => {
    var param = {
        RoleId: req.body.RoleId,
        CardId: req.body.CardId,
        Firstname: req.body.Firstname,
        Lastname: req.body.Lastname,
        Gender: req.body.Gender,
        Dob: req.body.Dob,
        Tel: req.body.Tel,
        Email: req.body.Email,
        Address: req.body.Address,
        BaseSalary: req.body.BaseSalary,
        Position: req.body.Position,
        Image: req.body.Image,
        Status: req.body.Status,
        CreateBy: req.body.CreateBy,
    };
    var sqlInsert = "INSERT INTO employee (RoleId,CardId,Firstname,Lastname,Gender,Dob,Tel,Email,Address,BaseSalary,Position,Image,Status,CreateBy)" +
        "VALUES (:RoleId,:CardId,:Firstname,:Lastname,:Gender,:Dob,:Tel,:Email,:Address,:BaseSalary,:Position,:Image,:Status,:CreateBy)";
    const [data] = await db.query(sqlInsert, param);
    res.json({
        message: "insert success",
        data: data,
    });
};
const update = async (req, res) => {
    var param = {
        Id: req.body.Id,
        RoleId: req.body.RoleId,
        CardId: req.body.CardId,
        Firstname: req.body.Firstname,
        Lastname: req.body.Lastname,
        Gender: req.body.Gender,
        Dob: req.body.Dob,
        Tel: req.body.Tel,
        Email: req.body.Email,
        Address: req.body.Address,
        BaseSalary: req.body.BaseSalary,
        Position: req.body.Position,
        Image: req.body.Image,
        Status: req.body.Status,
        CreateBy: req.body.CreateBy,
    };
    var sqlUpdate = "UPDATE employee SET RoleId=:RoleId,CardId=:CardId,Firstname=:Firstname,Lastname=:Lastname,Gender=:Gender,Dob=:Dob,Tel=:Tel,Email=:Email,Address=:Address,BaseSalary=:BaseSalary,Position=:Position,Image=:Image,Status=:Status,CreateBy=:CreateBy  WHERE Id = :Id;";
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
    var sqlDelete = "DELETE FROM employee WHERE Id = :Id";
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