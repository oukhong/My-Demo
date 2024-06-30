const { list, create, update, remove, getOne } = require("../controller/product.controller");

const product = (app) => {
    app.get("/api/product", list);
    app.get("/api/product", getOne);
    app.post("/api/product/:id", create);
    app.put("/api/product", update);
    app.delete("/api/product", remove);
};

module.exports = {
    product,
};