/** Controller */
import Quiz from "@/model/quiz"

//get:http://localhost:3000/api/admin
export async function getQuizzes(req, res) {
    try {
        const quizzes = await Quiz.find({})

        if (!quizzes) return res.status(404).json({ error: "Data Not Found!" })
        res.status(200).json(quizzes)

    } catch (error) {
        return res.status(404).json({ error: "Error | While Fetching Quiz Data" })
    }
}

//get:http://localhost:3000/api/admin?quizId=[_id]
export async function getQuiz(req, res) {
    try {
        const {quizId} = req.query

        if(quizId) {
            const quiz = await Quiz.findById(quizId)
            res.status(200).json(quiz)
        } else {
            return res.status(404).json({ error: "Quiz Not Found || ID Not Found" })
        }
    } catch (error) {
        return res.status(404).json({ error: "Error | While Fetching Quiz With ID" })
    }
}

//post: http://localhost:3000/api/admin
export async function postQuizzes(req, res) {
    try {
        const quizData = req.body;

        if (!quizData) return res.status(404).json({ error: "No Quiz Data Provided!" })

        const createQuiz = await Quiz.create(quizData)
        return res.status(200).json(createQuiz)

    } catch (error) {
        return res.status(404).json({ error: "Error | While Posting Quiz Data" })
    }
}

//put: http://localhost:3000/api/admin?quizId=[_id]
export async function putQuiz(req, res) {
    try {
        const { quizId } = req.query;
        const quizData = req.body;

        if (quizId && quizData) {
            await Quiz.findByIdAndUpdate(quizId, quizData);
            return res.status(200).json(quizData); // return success response here
        } else {
            return res.status(404).json({ error: "Quiz Not Selected || ID Not Found!" }); // send error response here
        }
    } catch (error) {
        return res.status(404).json({ error: "Error | While Updating Quiz Data" });
    }
}

//delete: http://localhost:3000/api/admin?quizId=[_id]
export async function deleteQuiz(req, res) {
    try {
        const {quizId} = req.query

        if(quizId) {
            const deleteQuiz = await Quiz.findByIdAndDelete(quizId)
            return res.status(200).json({message: `Deleted Quiz with ID = ${quizId}`})
        } else {
            return res.status(404).json({ error: "Quiz Not Deleted || ID Not Found!" });
        }

    } catch (error) {
        return res.status(404).json({ error: "Error | While Deleting Quiz Data" })
    }
}
