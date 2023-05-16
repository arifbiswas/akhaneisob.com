
import Product from "../../../Db/models/productModel";
import mongodb_connection from "../../../Db/mongoConnect/db.connection"
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
    const { payload } = req.query;
    let products = await  Product.findById({payload});
    if(!products){
       products = await  Product.find({payload});
    }
    res.send({message : "success" , products: products});
    res.end()
  } catch (error) {
    res.status(500).json({ message : "error", error : error });
  }
  })

  export default handler;