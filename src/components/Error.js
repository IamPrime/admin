import React from 'react'
import { BiMessageError } from 'react-icons/bi'

export default function Error({ message }) {
    return (
        <div className='mx-auto w-80 text-white font-bold'>
            <div className='flex items-center justify-center gap-4 mx-auto border border-red-400 rounded-lg text-md text-center bg-opacity-5 bg-gradient-to-r from-red-400 to-red-900'>
                {message} <BiMessageError className='w-8 h-8 text-yellow-200' />
            </div>
        </div>
    )
}