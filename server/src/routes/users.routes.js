const express = require("express");

const { httpRegisterUser, httpSignIn } = require('./users.controller')

const usersRouter = express.Router();

usersRouter.post("/signup", httpRegisterUser)
usersRouter.post("/signin", httpSignIn)

module.exports = usersRouter;