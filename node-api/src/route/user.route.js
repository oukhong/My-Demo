const { getList, getOne, create, login, update, remove } = require("../controller/user.controller");
const user = (app) => {
    app.get("/api/user", getList);
    app.get("/api/user/:Id", getOne);//params route
    app.post("/api/user", create);
    app.post("/api/user/login", login);
    app.put("/api/user", update);
    app.delete("/api/user", remove);
};

module.exports = {
    user,
};