const { list, create, update, remove, listById } = require("../controller/student.controller");
const student = (app) => {
    app.post("/api/student", create);
    app.get("/api/student", list);
    app.get("/api/student/:id", listById);
    // app.get("/api/student/:id/:name/:gender", listById);
    app.put("/api/student", update);
    app.delete("/api/student", remove);
};

module.exports = {
    student,
};
