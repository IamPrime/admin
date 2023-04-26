import React, { useState } from 'react'
import { FcManager } from 'react-icons/fc'
import QuizTable from '@/components/QuizTable'
import QuizForm from '@/components/QuizForm'
import { useSelector, useDispatch } from 'react-redux'
import { deleteAction, toggleChangeAction } from '@/redux/reducer'
import { MdDeleteForever, MdCheckBox } from 'react-icons/md'
import { deleteQuiz, getAllQuizzes } from '@/lib/helper'
import { useQueryClient } from 'react-query'

export default function Admin() {

    const visible = useSelector((state) => state.app.client.toggleForm)
    const deleteId = useSelector(state => state.app.client.deleteId)

    const queryClient = useQueryClient()
    const dispatch = useDispatch()

    const handleVisible = () => {
        //setVisible(visible ? false : true)
        dispatch(toggleChangeAction())

    }

    const handleCancel = async () => {
        console.log("Canceled")
        await dispatch(deleteAction(null))
    }

    const handleDelete = async () => {
        if (deleteId) {
            await deleteQuiz(deleteId)
            await queryClient.prefetchQuery('quizzes', getAllQuizzes)
            await dispatch(deleteAction(null))
        }
    }

    return (
        <>
            <div className='min-h-screen'>
                <div className='flex justify-between p-4'>
                    <h2>Genie Quiz Management</h2>
                    <h2>Welcome, I_am_Prime</h2>
                </div>
                <div className='p-4'>
                    <div className='w-full m-auto p-4 bg-gray-200 rounded-lg'>
                        <div className='text-xl md:text-5xl text-center font-bold py-10'>
                            Quiz Management
                        </div>
                        <div className='left flex gap-3'>
                            <button onClick={handleVisible}
                                className='flex items-center gap-2 bg-white text-amber-600 hover:font-bold px-4 py-3 rounded-md border border-amber-300 hover:border-amber-500'>
                                <FcManager size={25} />
                                Manage Quiz
                            </button>
                        </div>

                        {deleteId ? DeleteComponent({ handleCancel, handleDelete }) : <></>}

                        {/** Quiz Form section */}
                        {visible ? <QuizForm /> : <></>}

                        {/** Quiz Table section */}
                        <section>
                            <QuizTable />
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

function DeleteComponent({ handleDelete, handleCancel }) {
    return (
        <>
            <div className='flex gap-5 items-center justify-center bg-yellow-300 px-4 py-4 font-bold border rounded-lg mt-3 mr-32 ml-32'>
                <div>Delete Action | Are You Sure?</div>
                <button onClick={handleCancel}
                    className='flex items-center justify-center bg-green-400 hover:bg-green-800 border rounded-lg py-3 px-3 hover:text-white'>
                    No
                    <span className='ml-2 text-green-100'>
                        <MdCheckBox size={25} />
                    </span>
                </button>
                <button onClick={handleDelete}
                    className='flex items-center justify-center bg-red-400 hover:bg-red-700 border rounded-lg py-3 px-3 hover:text-white'>
                    Yes
                    <span className='ml-2 text-red-100'>
                        <MdDeleteForever className='gap-3' size={25} />
                    </span>
                </button>
            </div>
        </>
    )
}