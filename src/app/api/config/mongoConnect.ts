import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/peabux");
    // await mongoose.connect(
    //   "mongodb+srv://hayy:12345@cluster0.djcznjv.mongodb.net/?retryWrites=true&w=majority"
    // );
  } catch (error) {
    const errorMesg = error as any;
    console.error("Error connecting to MongoDB:", errorMesg.message);
  }
};

export default connectMongoDB;
