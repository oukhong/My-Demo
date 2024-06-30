const db = require("../util/db");
const bscrypt = require("bcrypt");

const getList = async (req, res) => {
    const [data] = await db.query("SELECT * FROM user");
    res.json({
        list: data,
    });
};

const getOne = async (req, res) => {
    var paramSql = {
        Id: req.params.Id,
    };
    const [data] = await db.query("SELECT * FROM user WHERE Id = :Id", paramSql);
    res.json({
        list: data,
    });
};

const create = async (req, res) => {
    // post body(json)
    var passwordHash = bscrypt.hashSync(req.body.Password, 10); // 123456 => sjafie3434jkkf
    var param = {
        RoleId: req.body.RoleId,
        Username: req.body.Username,
        Password: passwordHash,  //req.body.Password, //bscrypt and hash
        Status: req.body.Status,
    };
    var sqlInsert = "INSERT INTO user (RoleId,Username,Password,Status) VALUES (:RoleId,:Username,:Password,:Status)";
    const [data] = await db.query(sqlInsert, param);
    res.json({
        message: "insert success",
        data: data,
    });
};

const login = async (req, res) => {
    var Username = req.body.Username;
    var Password = req.body.Password;
    var message = {};
    if (Username == "" || Username == null) {
        message.Username = "Username required!";
    }
    if (Password == "" || Password == null) {
        message.Password = "Password required!";
    }

    if (Object.keys(message).length > 0) {
        res.json({
            error: message,
        });
        return false;
    }

    // Object.keys(message).length = return total key in object message
    var sqlCheck = "SELECT * FROM user WHERE Username = :Username";
    const [data] = await db.query(sqlCheck, {
        Username: Username,
        Password: Password,
    });
    if (data.length == 0) {
        res.json({
            error: {
                message: "Username doesn't exist!",
            },
        });
        return false;
    } else {
        const passwordFromDB = data[0].Password; //$2b$10$8uPm/5PkPtgkadHCARUXrOiWuLkCLwKTvSh7qxFvskC1Oibel0R76
        const isCorrectPassword = bscrypt.compareSync(req.body.Password, passwordFromDB); //true or false
        if (isCorrectPassword) {
            delete data[0].Password; //remove property password from
            res.json({
                message: "Logon success",
                user: data[0],
            });
        } else {
            res.json({
                error: {
                    message: "Password incorrect!",
                },
            });
        }
    }
};

const update = async (req, res) => {
    // put body(json)
    var param = {
        Id: req.body.Id,
        RoleId: req.body.RoleId,
        Username: req.body.Username,
        Password: req.body.Password, //bscrypt and hash
        Status: req.body.Status,
    };
    var sqlUpdate = "UPDATE user SET  RoleId=:RoleId, Status=:Status, Password=:Password WHERE Id = :Id;";
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
    var sqlDelete = "DELETE FROM user WHERE Id = :Id";
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
    login,
    update,
    remove,
};