import mongoose, { Schema } from "mongoose";

const QuestionSchema = new Schema(
  {
    question: {
      type: String,
      required: true,
      unique: true,
    },
    options: {
      type: [String],
      required: true,
      validate: [arrayLimit, "Must provide exactly 4 options"],
    },
    correct_answer: {
      type: String,
      required: true,
    },
    topics: {
      type: [String],
      required: true,
    },
    exams: {
      type: [String],
      required: true,
    },
    weightage: {
      type: Number,
      required: true,
    },
    type: {
      type: [String],
      required: true,
    },
    index: {
      type: Number,
      unique: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

function arrayLimit(val) {
  return val.length === 4;
}

const Question = mongoose.model("Question", QuestionSchema);

export default Question;
