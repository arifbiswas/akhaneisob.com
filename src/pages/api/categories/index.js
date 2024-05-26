import Category from "@/Db/models/categoryModel";
import Product from "../../../Db/models/productModel";
import mongodb_connection from "../../../Db/mongoConnect/db.connection";
import mongoose from "mongoose";
import { NextRequest } from "next/server";
import { MongoClient } from "mongodb";

export default async function hanlder(req, res, next) {
  try {
    const client = new MongoClient(
      "mongodb+srv://akhaneisob:HH1ikvXEZp53A2Ll@cluster0.7xyixxj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    const db = client.db("Akhanei_Sob");
    const Category = db.collection("categories");
    const Product = db.collection("products");
    if (req.method === "GET") {
      console.log("ok");
      const category = await Category.find({}).toArray();
      res.json({ message: "success", category: category });
    }
  } catch (error) {
    res.json({ success: false, error: error });
  }
}
// const handler = nc({
//   onError: (err, req, res, next) => {
//     console.error(err.message);
//     res.status(500).end("Something broke!", err.message);
//   },
//   onNoMatch: (req, res) => {
//     res.status(404).end("Page is not found");
//   },
// })
//   .get(async (req, res) => {
//     try {
//       const category = await Category.find({});
//       res.send({ message: "success", category: category });
//       res.end();
//     } catch (error) {
//       res.status(500).json({ message: "error", error: error });
//     }
//   })
//   .post(async (req, res) => {
//     try {
//       const result = await Category.create(req.body);
//       res.json({ message: "success", result: result });
//       res.end();
//     } catch (error) {
//       res.status(500).json({ message: "error", error: error });
//     }
//   });

// export default handler;
