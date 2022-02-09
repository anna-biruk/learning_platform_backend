import mongoose from "mongoose";

const interviewSchema = new mongoose.Schema({
    name: String,
    description: String,
    jobTitle: String,
    price: Number,
    sellPrice: Number,
    technologies: [String],
    schedule: [{
        from: Date,
        to: Date,
        status: {
            type: String,
            enum: ['free', 'booked'],
            default: 'free'
        }
    }],
    linkedinUrl: String,
    imageUrl: String,
    isDisabled: Boolean
});

const InterviewModel = mongoose.model("InterviewModel", interviewSchema, "Interviews");
export default InterviewModel;
