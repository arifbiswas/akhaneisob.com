import Category from "@/Db/models/categoryModel";
import Product from "../../Db/models/productModel";
import mongodb_connection from "../../Db/mongoConnect/db.connection"
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
    const category = await  Category.find({});
    res.send({message : "success" , category: category});
    res.end()
  } catch (error) {
    res.status(500).json({ message : "error", error : error });
  }
  })
  .post(async (req, res) => {
    try {
      const result = await Category.create(req.body);
    res.json({ message : "success", result : result });
    res.end()
    } catch (error) {
      res.status(500).json({ message : "error", error : error });
    }
  })
 
export default handler;