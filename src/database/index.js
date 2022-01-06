import mongoose from "mongoose";

connectToDB().catch((err) => console.log(err));

async function connectToDB() {
  await mongoose.connect(
    "mongodb://root:example@localhost:27017/courses?authSource=admin"
  );
  console.log("Connected to MongoDB");
}
