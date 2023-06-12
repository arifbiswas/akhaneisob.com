import Categories from "../../../Db/models/categoryModel";
import mongodb_connection from "../../../Db/mongoConnect/db.connection";
import nc from "next-connect";

mongodb_connection();
const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.message);
    res.status(500).end("Something broke!", err.message);
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
})
  .get(async (req, res) => {
    try {
      const { id } = req.query;
      let category = await Categories.findById(id);
      res.send({ message: "success", category: category });
      res.end();
    } catch (error) {
      res.status(500).json({ message: "error", error: error });
    }
  })
  .put(async (req, res) => {
    try {
      const { id } = req.query;
      // console.log(id);
      const UpdatedCategory = req.body;
      let category = await Categories.findById(id);
      // console.log(category);
      // filtering the requester
      if (category._id) {
        const result = await Categories.updateOne(
          { _id: category?._id },
          {
            $set: {
              name: UpdatedCategory.name,
              imgUrl: UpdatedCategory.imgUrl,
            },
          }
        );
        category = await Categories.findById(id);
        res.send({ message: "success", result, category });
      } else {
        res.json({ message: "something want wrong!" });
      }
    } catch (error) {
      console.log(error);
    }
  })
  .delete(async (req, res) => {
    try {
      const { id } = req.query;
      const result = await Categories.deleteOne({ _id: id });
      res.send(result);
    } catch (error) {
      console.log(error);
    }
  });

export default handler;
