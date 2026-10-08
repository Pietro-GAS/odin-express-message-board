import { Router } from "express";

const messages = [ // stock messages for the app
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

export const indexRouter = Router();
indexRouter.get("", (req, res) => { res.send("Hello world!"); }); // placeholder
indexRouter.get("/new", (req, res) => { res.send("New message form"); }); // placeholder