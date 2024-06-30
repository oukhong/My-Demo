const db = require("../util/db");

const list = async (req, res) => {
    var [data] = await db.query("SELECT * FROM product");
    res.json({
        list: data,
    });
};

const getOne = async (req, res) => {
    var paramSql = {
        Id: req.params.Id,
    }
    const [data] = await db.query("SELECT * FROM product WHERE Id = :Id", paramSql);
    res.json({
        list: data,
    });
};

const create = async (req, res) => {
    //post body(json)
    var param = {
        CategoryId: req.body.CategoryId,
        Brand: req.body.Brand,
        Name: req.body.Name,
        Description: req.body.Description,
        Price: req.body.Price,
        Quantity: req.body.Quantity,
        Image: req.body.Image,
        Status: req.body.Status,
        CreateBy: req.body.CreateBy,
    };
    var sqlInsert =
        "INSERT INTO product(CategoryId, Brand, Name, Description, Price, Quantity, Image, Status, CreateBy) VALUES (:CategoryId, :Brand, :Name, :Description, :Price, :Quantity, :Image, :Status, :CreateBy)";
    const [data] = await db.query(sqlInsert, param);
    res.json({
        message: "Create success",
        list: data,
    });
};

const update = async (req, res) => {
    var sqlParam = {
        Id: req.body.Id,
        Name: req.body.Name,
        Description: req.body.Description,
        CategoryId: req.body.CategoryId,
        Brand: req.body.Brand,
        Price: req.body.Price,
        Quantity: req.body.Quantity,
        Image: req.body.Image,
        Status: req.body.Status,
    };
    var sqlUpdate =
        "UPDATE product SET " +
        "Name = :Name," +
        "Description = :Description," +
        "CategoryId = :CategoryId," +
        "Brand = :Brand," +
        "Price = :Price," +
        "Quantity = :Quantity," +
        "Image = :Image," +
        "Status = :Status" +
        "WHERE Id = :Id ";
    const [data] = await db.query(sqlUpdate, sqlParam);
    res.json({
        list: data,
        message: "update successfully!",
    });
};

const remove = async (req, res) => {
    var paramSql = {
        Id: req.body.Id,
    }
    const [data] = await db.query("DELETE FROM product WHERE Id = :Id", paramSql);
    res.json({
        list: data,
        message: "Remove successfully!"
    });
};

module.exports = {
    list,
    getOne,
    create,
    update,
    remove,
};