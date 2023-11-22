const express = require("express");
const router = express.Router();
const OrderController = require("../controllers/OrderController");

router.post("/create", OrderController.createOrder);
router.get("/get-all-order/:id", OrderController.getAllOrderDetails);
router.get("/get-all-order", OrderController.getAllOrder);
router.delete("/cancel-order/:id", OrderController.cancelOrderDetails);
router.put("/update/:id", OrderController.updateOrder);
module.exports = router;
