const { getList, getOne, create, update, remove } = require("../controller/employee.controller");
const employee = (app) => {
    app.get("/api/employee", getList);
    app.get("/api/employee/:Id", getOne);//params route
    app.post("/api/employee", create);
    app.put("/api/employee", update);
    app.delete("/api/employee", remove);
};

module.exports = {
    employee,
};