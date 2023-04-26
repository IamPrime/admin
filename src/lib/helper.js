/** These are helper functions
 * Used to consume the apis
 */

/** BASE_URL for working with Frontend */
//const BASE_URL = 'http://localhost:3000/Admin'

/** BASE_URL for working with backend */
const BASE_URL = 'https://admin-iamprime.vercel.app'

/** Get all quizzes from the database */
export const getAllQuizzes = async () => {
    const response = await fetch(`${BASE_URL}/api/admin`)

    const json = await response.json()

    return json
}

/** Get quiz by Id */
export const getQuizId = async (quizId) => {
    const response = await fetch(`${BASE_URL}/api/admin/${quizId}`)

    const json = await response.json()

    return json
}

/** Post Quiz */
export async function postQuiz(quizData) {
    try {
        const Options = {
            method: 'POST',
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(quizData)
        }

        const response = await fetch(`${BASE_URL}/api/admin`, Options)
        const json = await response.json()

        return json

    } catch (error) {
        return error
    }
}

/** Update Quiz by Id */
export async function putQuiz(quizId, quizData) {
    try {
        const Options = {
            method: 'PUT',
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(quizData)
        }

        const response = await fetch(`${BASE_URL}/api/admin/${quizId}`, Options)
        const json = await response.json()

        return json

    } catch (error) {
        return (error.message)
    }
}

/** Delete Quiz by Id */
export async function deleteQuiz(quizId) {
    try {
        const Options = {
            method: 'DELETE',
            headers: { 'Content-Type': "application/json" },
        }

        const response = await fetch(`${BASE_URL}/api/admin/${quizId}`, Options)
        const json = await response.json()

        return json

    } catch (error) {
        return (error.message)
    }
}