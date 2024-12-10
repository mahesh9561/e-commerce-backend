const express = require("express");
const Razorpay = require("razorpay");
const crypto = require("crypto");
// const router = express.Router();

// exports.ProductOrder(async (req, res) => {
//     console.log("Server running");
//     try {
//         const razorpay = new Razorpay({
//             key_id: process.env.RAZORPAY_Key_Id,
//             key_secret: process.env.RAZORPAY_Key_Secret
//         });
//         if (!req.body || Object.keys(req.body).length === 0) {
//             return res.status(400).json({ error: "Bad request: No data provided" });
//         }

//         const { amount, currency, receipt } = req.body;

//         if (!amount || isNaN(amount) || amount <= 0) {
//             return res.status(400).json({ error: "Invalid amount" });
//         }

//         const order = await razorpay.orders.create({
//             amount: Math.round(amount * 100),
//             currency,
//             receipt
//         });

//         res.json({ id: order.id });
//     } catch (error) {
//         console.error("Error while processing order:", error);
//         res.status(500).json("Internal server error while processing order");
//     }
// });

// exports.validationPayment(async (req, res) => {
//     const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

//     const sha = crypto.createHmac('sha256', process.env.RAZORPAY_Key_Secret);
//     sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);
//     const digest = sha.digest("hex");

//     // Validate the signature
//     if (digest !== razorpay_signature) {
//         return res.status(400).json({ msg: "Transaction is not legit" });
//     }

//     res.json({ msg: "Transaction is legit!" });
// });
        
