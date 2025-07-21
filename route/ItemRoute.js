const exp= require("express");
const { getAllItems, addItem, deleteItem, updateItem } = require("../contoller/ItemController");
const route= exp.Router();
const authMiddleWare= require('../middleware/AuthMiddleWare');
route.use(authMiddleWare);

/**
 * @swagger
 * /api/getItems:
 *   get:
 *     summary: Get all item
 *     responses:
 *       200:
 *         description: List of items
 */

route.get("/getItems",getAllItems);


/**
  * @swagger
 * /api/addItem:
 *   post:
 *     summary: Create a new item
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - content
 *             properties:
 *               name:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       201:
 *         description: Item created successfully
 */
route.post("/addItem",addItem);

/**
 * @swagger
 * /api/deleteItem/{id}:
 *   delete:
 *     summary: Delete an item by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The item ID
 *     responses:
 *       200:
 *         description: Item deleted successfully
 */
route.delete("/deleteItem/:id",deleteItem)

/**
 * @swagger
 * /api/updateItem/{id}:
 *   put:
 *     summary: Update an item by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The item ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       200:
 *         description: Item updated successfully
 */
route.put("/updateItem/:id",updateItem)


module.exports=route;