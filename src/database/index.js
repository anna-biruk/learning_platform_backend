import mongoose from "mongoose";

connectToDB().catch((err) => console.log(err));

async function connectToDB() {
    // FIXME: remove all the .set after upgrading the version of mongoose to 6+
    mongoose.set("useNewUrlParser", true);
    mongoose.set("useFindAndModify", false);
    mongoose.set("useCreateIndex", true);
    mongoose.set("useUnifiedTopology", true);
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB");
}
