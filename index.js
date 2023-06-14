import express from "express";
import initializeDB from "./startup/db.js";
import routes from "./startup/routes.js";
const app = express();

routes(app);
initializeDB();

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`listening on the port ${port}...`));
