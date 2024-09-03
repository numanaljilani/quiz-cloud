import mongoose, { Schema } from 'mongoose';



const SolvedQuestionSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  question: { type: Schema.Types.ObjectId, ref: 'Question', required: true },
  isCorrect: { type: Boolean, required: true },
  solvedAt: { type: Date, default: Date.now },
});

export default mongoose.model('SolvedQuestion', SolvedQuestionSchema);
