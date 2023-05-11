import Product from "@/Db/models/addPostModel";
import mongodb_connection from "@/Db/mongoConnect/db_connection"
import mongoose from "mongoose";
// pages/api/hello.js
import nc from "next-connect";
mongodb_connection()
const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.message);
    res.status(500).end("Something broke!",err.message);
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
})
  .get( async (req, res) => {
  try {
    const products = await  Product.find({});
    res.send({message : "success" , products: products});
    res.end()
  } catch (error) {
    res.status(500).json({ message : "error", error : error });
  }
  })
  .post(async (req, res) => {
    try {
      const result = await Product.create(req.body);
    res.json({ message : "success", result : result });
    res.end()
    } catch (error) {
      res.status(500).json({ message : "error", error : error });
    }
  })
 
export default handler;