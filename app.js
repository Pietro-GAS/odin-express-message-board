import express from "express";
import * as path from "path";
import { indexRouter } from "./routes/indexRouter.js";

const app = express();

const __dirname = import.meta.dirname;
const assetsPath = path.join(__dirname, "public");
const viewsPath = path.join(__dirname, "views")

// enable ejs as view engine
app.set("views", viewsPath);
app.set("view engine", "ejs");

// middleware to enable the use of static files
app.use(express.static(assetsPath));
// middleware to parse form data into req.body
app.use(express.urlencoded({ extended: true }));


app.use("/", indexRouter);


const PORT = process.env.PORT || 3003;
app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`My message board app - listening on port ${PORT}...`);
});