import Joi from "joi";
import CustomErrorHandler from "../../services/error/CustomErrorHandler.js";
import QuestionsSet from "../../models/questionSetsModel.js";

export const examsSets = async (req, res , next) =>{
    try {
      const exams = await QuestionsSet.find();
      console.log(exams , "Exams")
  
      res.status(200).json({success : true , data : exams })
    } catch (error) {
      console.log(error.message , "error from questions set controller => examsSets")
    }
  }