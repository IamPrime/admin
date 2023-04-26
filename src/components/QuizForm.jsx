import React, { useReducer } from 'react'
import AddQuizForm from './AddQuizForm'
import UpdateQuizForm from './UpdateQuizForm'
import { useSelector } from 'react-redux'

const QuizReducer = (state) => {
    return {
        ...state,
        [event.target.name]: event.target.value
    }
}

function QuizForm() {

    const [quizData, setQuizData] = useReducer(QuizReducer, {})
    const formId = useSelector((state) => state.app.client.formId)

    /** To manually toggle the form */
    //const flag = false

    return (
        <>
            <div>
                {formId ? UpdateQuizForm({ formId, quizData, setQuizData }) : AddQuizForm({ quizData, setQuizData })}
            </div>
        </>
    )
}

export default QuizForm