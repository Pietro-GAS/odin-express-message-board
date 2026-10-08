import express from "express";
import * as path from "path";
import { fileURLToPath } from 'url';
import { dirname } from "node:path";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const assetsPath = path.join(__dirname, "public");
const viewsPath = path.join(__dirname, "views")

// enable ejs as view engine
app.set("views", viewsPath);
app.set("view engine", "ejs");

// middleware to enable the use of static files
app.use(express.static(assetsPath));



app.get("/", (req, res) => { res.send("Hello world!")}); // placeholder



const PORT = process.env.PORT || 3003;
app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`My message board app - listening on port ${PORT}...`);
});