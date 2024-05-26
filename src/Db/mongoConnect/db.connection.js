import mongoose from "mongoose";

const mongodb_connection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://lol:arif310@cluster0.7xyixxj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`DB Connected`);
  } catch (error) {
    console.log("Couldn't connect to MongoDB " + error.message);
  }
};

export default mongodb_connection;
