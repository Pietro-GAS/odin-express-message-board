import { Router } from "express";
import { moveMessagePortToContext } from "node:worker_threads";

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
indexRouter.get("", (req, res) => { res.render("index", { messages: messages }); });
indexRouter.get("/new", (req, res) => { res.render("form"); });
indexRouter.post("/new", (req, res) => {
  messages.push({ text: req.body.msgText, user: req.body.msgName, added: new Date() });
  res.redirect("/");
});