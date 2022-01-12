import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    id: {type: mongoose.Types.ObjectId, default: () => mongoose.Types.ObjectId()},
    question: String,
    answer: String,
    category: String,
    media: [String],
    references: [String],
});

const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    fullDescription: String,
    price: Number,
    sellPrice: Number,
    questions: [questionSchema],
    technologies: [String],
    rating: Number,
    language: String,
    imageUrl: String,
});

const CourseModel = mongoose.model("CourseModel", courseSchema, "Courses");

export default CourseModel;
