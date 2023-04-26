import React from 'react'
import { RiDeleteBin2Fill, RiFileEditFill } from 'react-icons/ri'
//import data from '@/data/questions.json' //for using local data
import { getAllQuizzes } from '@/lib/helper'
import { useQuery } from 'react-query'
import { useSelector, useDispatch } from 'react-redux'
import { toggleChangeAction, updateAction, deleteAction } from '@/redux/reducer'

function QuizTable() {

    // If the data hasn't been changed, this will return the cached data
    const { isLoading, isError, data, error } = useQuery('quizzes', getAllQuizzes)

    if (isLoading) return (
        <>
            <div>Loading Quizzes....</div>
        </>
    )

    if (isError) return (
        <>
            <div>Got Error {error.message}</div>
        </>
    )

    return (
        <>
            <div className='min-h-screen'>
                <div className='p-4'>
                    <div className='w-full m-auto p-4 bg-gray-50 rounded-lg border border-amber-300'>
                        <table className='min-w-full table-auto'>
                            <thead className='bg-gray-200'>
                                <tr>
                                    <th className='px-10 py-6'>
                                        <span>Question</span>
                                    </th>
                                    <th className='px-10 py-6'>
                                        <span>Answer</span>
                                    </th>
                                    <th className='px-10 py-6'>
                                        <span>No of Options</span>
                                    </th>
                                    <th className='px-10 py-6'>
                                        <span>Category</span>
                                    </th>
                                    <th className='px-10 py-6'>
                                        <span>Actions</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, id) => (
                                    <Tr key={id} {...item} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

function Tr({ _id, question, answer, numOptions, category }) {

    const visible = useSelector((state) => state.app.client.toggleForm)
    const devisible = useSelector((state) => state.app.client.deleteId)
    const dispatch = useDispatch()

    const onUpdate = () => {
        dispatch(toggleChangeAction(_id))
        if (visible) {
            dispatch(updateAction(_id))
        }
    }

    const onDelete = () => {
        if(!devisible){
            dispatch(deleteAction(_id))
        }
    }

    return (
        <tr className='bg-gray-100 text-center overflow-y-auto'>
            <td className='px-10 py-2 flex flex-row items-center'>
                <span className='text-center ml-2 font-semibold'>{question || "Unknown"}</span>
            </td>
            <td className='px-10 py-2'>
                <span className='text-center ml-2 font-semibold'>{answer || "Unknown"}</span>
            </td>
            <td className='px-10 py-2'>
                <span className='text-center ml-2 font-semibold'>{numOptions || "Unknown"}</span>
            </td>
            <td className='px-10 py-2'>
                <button className='cursor-pointer'>
                    <span className='text-center ml-2 font-semibold rounded-lg'>{category || "Unknown"}</span>
                </button>
            </td>
            <td className='px-10 py-2 space-x-4'>
                <button className='cursor-zoom-in' title='edit' onClick={onUpdate}>
                    <RiFileEditFill className='text-blue-400' size={18} />
                </button>
                <button className='cursor-help' title='delete' onClick={onDelete}>
                    <RiDeleteBin2Fill className='text-red-400' size={18} />
                </button>
            </td>
        </tr>
    )
}

export default QuizTable