import React, { useState } from 'react';
import { BsDatabaseFillExclamation } from 'react-icons/bs';
import Success from './Success';
import Error from './Error';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { getAllQuizzes, getQuizId, putQuiz } from '@/lib/helper';

function UpdateQuizForm({ formId, quizData, setQuizData }) {
    const queryClient = useQueryClient();
    const { isLoading, isError, data, error } = useQuery(['quizzes', formId], () =>
        getQuizId(formId)
    );
    const [category, setCategory] = useState(data?.category || 'General');
    const [isSuccess, setIsSuccess] = useState(false)

    const updateMutation = useMutation(
        (newData) => putQuiz(formId, newData),
        {
            onSuccess: async (data) => {
                // This line below will update the table content and display all the available quizzes
                queryClient.prefetchQuery('quizzes', getAllQuizzes);
                setIsSuccess(true)
            },
        }
    );

    if (isLoading) return <div>L.O.A.D.I.N.G.......</div>;
    if (isError) return <Error message={'Error | No Data Retrieved'} />;

    const { question, answer, optionA, optionB, optionC, optionD, numOptions } = data;

    const handleSubmit = async (e) => {
        e.preventDefault();
        let contentUpdate = Object.assign({}, data, quizData, { category: category });
        await updateMutation.mutate(contentUpdate);
    };

    return (
        <>
            <div className="p-4">
                {isSuccess ? (<Success message={"Success | Quiz Updated Successfully"} />) : (
                    <div className="w-full m-auto p-4 bg-gray-50 rounded-lg border border-amber-300">
                        <form onSubmit={handleSubmit}>
                            <div className="grid lg:grid-cols-2 gap-4">
                                <div>
                                    <input
                                        type="text"
                                        name="question"
                                        placeholder="Enter Question"
                                        defaultValue={question}
                                        onChange={(e) =>
                                            setQuizData({ ...quizData, question: e.target.value })
                                        }
                                        required
                                        className="w-full border px-5 py-3 focus:outline-none rounded-md"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="answer"
                                        placeholder="Enter Answer"
                                        onChange={(e) =>
                                            setQuizData({ ...quizData, answer: e.target.value })
                                        }
                                        defaultValue={answer}
                                        required
                                        className="w-full border px-5 py-3 focus:outline-none rounded-md"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="optionA"
                                        placeholder="Enter Option A"
                                        onChange={(e) =>
                                            setQuizData({ ...quizData, optionA: e.target.value })
                                        }
                                        defaultValue={optionA}
                                        required
                                        className="w-full border px-5 py-3 focus:outline-none rounded-md"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="optionB"
                                        placeholder="Enter Option B"
                                        onChange={(e) =>
                                            setQuizData({ ...quizData, optionB: e.target.value })
                                        }
                                        defaultValue={optionB}
                                        required
                                        className="w-full border px-5 py-3 focus:outline-none rounded-md"
                                    />
                                </div>
                                <div>
                                    <input type='text' name='optionC' placeholder='Enter Option C'
                                        onChange={setQuizData} defaultValue={optionC} required
                                        className='w-full border px-5 py-3 focus:outline-none rounded-md' />
                                </div>
                                <div>
                                    <input type='text' name='optionD' placeholder='Enter Option D'
                                        onChange={setQuizData} defaultValue={optionD} required
                                        className='w-full border px-5 py-3 focus:outline-none rounded-md' />
                                </div>

                                <div>
                                    <input type='text' name='numOptions' placeholder='Number of Options'
                                        onChange={setQuizData} defaultValue={numOptions} required
                                        className='w-full border px-5 py-3 focus:outline-none rounded-md' />
                                </div>

                                <div className='flex items-center justify-center gap-4 py-4 px-2'>
                                    <div>
                                        <select
                                            name="category"
                                            defaultValue={category}
                                            onChange={(e) => setCategory(e.target.value)}
                                            required
                                            className="w-full border px-5 py-3 focus:outline-none rounded-md"
                                        >
                                            <option value="General">General</option>
                                            <option value="Science">Science</option>
                                            <option value="Geography">Geography</option>
                                            <option value="History">History</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className='flex justify-center items-center mt-4'>
                                <button type='submit' className='flex items-center justify-center gap-2 text-md w-2/5 bg-sky-200 hover:bg-sky-400 text-violet-600 hover:text-white px-4 py-3 rounded-md border border-indigo-300 hover:border-indigo-500'>
                                    <BsDatabaseFillExclamation />
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </>
    )
}

export default UpdateQuizForm