const { getList, getOne, create, update, remove } = require("../controller/customer.controller");
const customer = (app) => {
    app.get("/api/customer", getList);
    app.get("/api/customer/:Id", getOne);//params route
    app.post("/api/customer", create);
    app.put("/api/customer", update);
    app.delete("/api/customer", remove);
};

module.exports = {
    customer,
};