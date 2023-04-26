import React from 'react'
import { BsDatabaseFillAdd } from 'react-icons/bs'
import Success from './Success';
import Error from './Error';
import { useQueryClient, useMutation } from 'react-query';
import { getAllQuizzes, postQuiz } from '@/lib/helper';


function AddQuizForm({ quizData, setQuizData }) {

    const queryClient = useQueryClient()

    //call the helper function for posting a quiz
    const addMutation = useMutation(postQuiz, {
        onSuccess: () => {
            queryClient.prefetchQuery('quizzes', getAllQuizzes)
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        let { question, answer, optionA, optionB, optionC, optionD, numOptions, category } = quizData

        const model = {
            question, answer, optionA, optionB, optionC, optionD, numOptions,
            category
        }

        addMutation.mutate(model)
    }

    /**if (Object.keys(quizData).length == 0) return (<><Error message={"Error | No Data Added"} /></>)

        if (Object.keys(quizData).length > 5) return (<><Success message={"Data Added Successfully"} /></>)**/

    if (addMutation.isLoading) return (<><div>Loading.....</div></>)

    if (addMutation.isError) return (<><Error message={addMutation.error.message} /></>)

    if (addMutation.isSuccess) return (<><Success message={"Data Added Successfully"} /></>)

    return (
        <>
            <div className='p-4'>
                <div className='w-full m-auto p-4 bg-gray-50 rounded-lg border border-amber-300'>
                    <form onSubmit={handleSubmit}>
                        <div className='grid lg:grid-cols-2 gap-4'>
                            <div>
                                <input type='text' name='question' placeholder='Enter Question' onChange={setQuizData} required
                                    className='w-full border px-5 py-3 focus:outline-none rounded-md' />
                            </div>
                            <div>
                                <input type='text' name='answer' placeholder='Enter Answer' onChange={setQuizData} required
                                    className='w-full border px-5 py-3 focus:outline-none rounded-md' />
                            </div>
                            <div>
                                <input type='text' name='optionA' placeholder='Enter Option A' onChange={setQuizData} required
                                    className='w-full border px-5 py-3 focus:outline-none rounded-md' />
                            </div>
                            <div>
                                <input type='text' name='optionB' placeholder='Enter Option B' onChange={setQuizData} required
                                    className='w-full border px-5 py-3 focus:outline-none rounded-md' />
                            </div>
                            <div>
                                <input type='text' name='optionC' placeholder='Enter Option C' onChange={setQuizData} required
                                    className='w-full border px-5 py-3 focus:outline-none rounded-md' />
                            </div>
                            <div>
                                <input type='text' name='optionD' placeholder='Enter Option D' onChange={setQuizData} required
                                    className='w-full border px-5 py-3 focus:outline-none rounded-md' />
                            </div>

                            <div>
                                <input type='text' name='numOptions' placeholder='Number of Options' onChange={setQuizData} required
                                    className='w-full border px-5 py-3 focus:outline-none rounded-md' />
                            </div>

                            <div className='flex items-center justify-center gap-4 py-4 px-2'>
                                <div>
                                    <input type="radio" name="category" value="General" id='General' onChange={setQuizData} required
                                        className='appearance-none checked:bg-green-400 checked:border-purple-500 rounded-lg h-4 w-4 border border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-contain float-left mr-2 cursor-context-menu' />
                                    <label htmlFor="General" className='inline-block'>General</label>
                                </div>
                                <div>
                                    <input type="radio" name="category" value="Science" id='Science' onChange={setQuizData} required
                                        className='appearance-none checked:bg-green-400 checked:border-purple-500 rounded-lg h-4 w-4 border border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-contain float-left mr-2 cursor-context-menu' />
                                    <label htmlFor="Science" className='inline-block'>Science</label>
                                </div>
                                <div>
                                    <input type="radio" name="category" value="Technology" id='Technology' onChange={setQuizData} required
                                        className='appearance-none checked:bg-green-400 checked:border-purple-500 rounded-lg h-4 w-4 border border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-contain float-left mr-2 cursor-context-menu' />
                                    <label htmlFor="Technology" className='inline-block'>Technology</label>
                                </div>
                                <div>
                                    <input type="radio" name="category" value="Mathematics" id='Maths' onChange={setQuizData} required
                                        className='appearance-none checked:bg-green-400 checked:border-purple-500 rounded-lg h-4 w-4 border border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-contain float-left mr-2 cursor-context-menu' />
                                    <label htmlFor="Maths" className='inline-block'>Mathematics</label>
                                </div>
                            </div>
                        </div>


                        <div className='flex justify-center items-center mt-4'>
                            <button type='submit' className='flex items-center justify-center gap-2 text-md w-2/5 bg-green-200 hover:bg-green-400 text-amber-600 hover:text-white px-4 py-3 rounded-md border border-amber-300 hover:border-amber-500'>
                                <BsDatabaseFillAdd />
                                Add
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddQuizForm