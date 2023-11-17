const express = require("express");
const { check } = require('express-validator');
const router = express.Router();
const loginController = require('../controllers/loginController');

/**
 * @swagger
 * /api/login:
 *  get:
 *    description: Get all the IPs from DB
 *    produces:
 *      - application/json
 *    responses:
 *      '200':
 *        description: foods fetched successfully.
 */
router.get('/login', loginController.getLogin);



/**
 * @swagger
 * /api/login:
 *  post:
 *    description: Use to get login member in DB
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: get name
 *        password: get password
 *        description: get member parameters in DB.
 *        schema:
 *          type: object
 *          required:
 *            - loginName
 *            - loginPassword
 *          properties:
 *            loginName:
 *              type: string
 *            loginPassword:
 *              type: string
 *    responses:
 *      '200':
 *        description: successfully.
 */
router.post('/login', loginController.postLogin);
module.exports = router;  





// //Schema
// /**
//  * @swagger
//  * components:
//  *   schemas:
//  *     Login:
//  *       type: object
//  *       required:
//  *         - name
//  *         - password
//  *       properties:
//  *         id:
//  *           type: string
//  *           description: member id
//  *         name:
//  *           type: string
//  *           description: member name
//  *        password:
//  *           type: number
//  *           description: member password
//  *         createdAt:
//  *           type: string
//  *           format: date
//  *           description: The date the data was added
//  *       example:
//  *         id: d5fE_asz
//  *         name: OK
//  *         password: 12dafae343efw
//  *         createdAt: 2020-03-10T04:05:06.157Z
//  */
// //Routes
// /**
//  * @swagger
//  * /api/data:
//  *  get:
//  *      description: Use to request all customers
//  *      responses:
//  *          "200":
//  *              description: A sucessful response
//  */



















































// app.get("/api/data", async(req,res) => {
//     try {
//         const product = await Product.find({})
//         res.status(200).send(product)
//     } catch (error) {
//         console.log(error)
//         res.status(500).send({status:500,message: error.message})
//     }
// })
// // 
// app.post("/api/data", async (req,res) => {
//     try {
//         const product = await Product.create(req.body)
//         console.log(req.body);
//         res.status(200).send({status: 200,data:product})
//     } catch (error) {
//         console.log(error)
//         res.status(500).send({status:500,message: error.message})
//     }
// })