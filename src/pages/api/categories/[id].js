
import Categories from "../../../Db/models/categoryModel";
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
    const { id } = req.query;
    let category = await  Categories.findById(id);
    res.send({message : "success" , category: category});
    res.end()
  } catch (error) {
    res.status(500).json({ message : "error", error : error });
  }
  })

  export default handler;