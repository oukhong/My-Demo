const { getList, getOne, create, update, remove } = require("../controller/category.controller");
const category = (app) => {
    app.get("/api/category", getList);
    app.get("/api/category/:Id", getOne);//params route
    app.post("/api/category", create);
    app.put("/api/category", update);
    app.delete("/api/category", remove);
};

module.exports = {
    category,
};