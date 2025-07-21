/**
 * @swagger
 * /register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User registered
 */

/**
 * @swagger
 * /login:
 *   get:
 *     summary: Login a user
 *     tags: [Auth]
 *     parameters:
 *       - in: query
 *         name: email
 *         schema:
 *           type: string
 *       - in: query
 *         name: password
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Authenticated
 */

const {loginUser,registerUser } = require("../contoller/AuthController");

const authMiddleWare= require('../middleware/AuthMiddleWare');
const exp= require("express");
const route= exp.Router();
route.post("/register",registerUser);
route.get("/login",loginUser);
route.use(authMiddleWare);
module.exports= route;