
const {loginUser,registerUser } = require("../contoller/AuthController");

const authMiddleWare= require('../middleware/AuthMiddleWare');
const exp= require("express");
const route= exp.Router();
route.post("/register",registerUser);
route.get("/login",loginUser);
route.use(authMiddleWare);
module.exports= route;