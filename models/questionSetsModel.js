import mongoose, { Schema } from "mongoose";

const QuestionSetSchema = new Schema(
  {
    exam_name: {
      type: String,
      required: true,
      
    },
    set_number: {
        type: Number,
        required: true,
      },
    questions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question', // Reference to the Question model
      }
    ],
    num_questions: {
      type: Number,
      required: true,
    },
    
    total_marks: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const QuestionsSet = mongoose.model("QuestionsSet", QuestionSetSchema);

export default QuestionsSet;