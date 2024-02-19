const express = require("express");
const admin_routes = require("./routes/admin");
const dbConnect = require("./dbConnection");
const CorseRoute = require("./routes/CorseRoute");
const FeesRoute = require("./routes/FeesRoute");
const StudentRoute = require("./routes/StudentRoute");
const teachersRoute = require("./routes/teachersRoute");
const subjectRoute = require("./routes/subjectRoute");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const PORT = 8000;
app.use(cors({ origin: "*" }));
dbConnect("mongodb://0.0.0.0:27017/std-mangement");
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/sub", subjectRoute);
app.use("/admin", admin_routes);
app.use("/course", CorseRoute);
app.use("/std", StudentRoute);
app.use("/fees", FeesRoute);
app.use("/teachers", teachersRoute);
app.listen(PORT, () => console.log("Connected at" + "-" + PORT));
