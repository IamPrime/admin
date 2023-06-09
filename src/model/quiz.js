import { Schema, models, model } from "mongoose";

const quizSchema = new Schema({
    question: String,
    answer: String,
    optionA: String,
    optionB: String,
    optionC: String,
    optionD: String,
    category: String,
    numOptions: Number
})

const Quiz = models.quizzes || model('quizzes', quizSchema)

export default Quiz