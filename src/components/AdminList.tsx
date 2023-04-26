import React from 'react'
import { adminData } from '@/data/data'
import { RiAdminFill, RiUser3Fill } from 'react-icons/ri'

const AdminList = () => {
    return (
        <>
            <div className='w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-gray-200, overflow-scroll bg-gray-200'>
                <div className='flex items-center justify-center font-bold text-purple-800'>Meet The Team</div>
                <ul>
                    {adminData.map((admin, id) => (
                        <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer py-7 w-30'>
                            <div className='bg-purple-100 rounded-lg p-3'>
                                {admin.isAdmin ? <RiAdminFill className='text-purple-800' /> : <RiUser3Fill className='text-purple-800' />}
                            </div>
                            <div className='block'>
                                <div className='pl-2'>
                                    <p className='text-amber-500 font-bold'>{admin.name.first} {admin.name.last}</p>
                                    <p>{admin.isAdmin}</p>
                                </div>
                                <div className='lg:flex md:hidden absolute right-6 items-center gap-4 text-gray-700'>
                                    <p className='text-sm font-semibold'>{admin.access}</p>
                                    <p className='text-md'>{admin.age}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default AdminList
