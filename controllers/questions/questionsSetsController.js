import Joi from "joi";
import CustomErrorHandler from "../../services/error/CustomErrorHandler.js";
import QuestionsSet from "../../models/questionSetsModel.js";

const prisma = new PrismaClient();

export const createQuestionsSets = async (req, res, next) => {
  // Joi Validation
  try {
    const newSet = await new QuestionsSet({
      exam_name: "SAA-C03",
      set_number: 1,
      num_questions: 65,
      duration: 180,
      total_marks: 1000,
    });
    await newSet.save();
    console.log(newSet, "New Set ");

    // if user don't have any role then sending only with tokens
    res.status(200).json({
      data: { questionSet: newSet },
      success: true,
    });
  } catch (err) {
    console.log(err);
    return next(err);
  }
};



