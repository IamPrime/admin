import { adminData } from '@/data/data'
import { RiAdminFill, RiUser3Fill, RiSmartphoneFill } from 'react-icons/ri'
import { useState } from "react";

function ObfuscatedEmail({ email }) {
    const [obfuscatedEmail, setObfuscatedEmail] = useState(() =>
        email.replace(/./g, "*").replace(/@/, " at ").replace(/\./g, " dot ")
    );

    function handleClick() {
        setObfuscatedEmail(email);
    }

    return (
        <span className='cursor-pointer' onClick={handleClick}>
            {obfuscatedEmail}
        </span>
    );
}

const Users = () => {
    return (
        <>
            <div className='min-h-screen'>
                <div className='flex justify-between p-4'>
                    <h2>Users</h2>
                    <h2>List of Registered Users</h2>
                </div>
                <div className='p-4'>
                    <div className='w-full m-auto p-4 border bg-gray-200 rounded-lg overflow-y-auto'>
                        <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-2 font-bold items-center justify-around cursor-pointer'>
                            <span>Name</span>
                            <span className='sm:text-left text-right ml-14'>Email</span>
                            <span className='hidden sm:grid'>Access</span>
                            <span className='hidden md:grid text-center'>Phone</span>
                        </div>
                        <ul>
                            {adminData.map((user) => (
                                <li
                                    key={user.id}
                                    className='bg-gray-50 hover:bg-gray-100 cursor-pointer rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 items-center justify-between'
                                >
                                    <div className='flex items-center'>
                                        <div className='bg-purple-200 p-3 rounded-lg'>
                                            {user.isAdmin ? <RiAdminFill className='text-purple-800' /> : <RiUser3Fill className='text-purple-800' />}
                                        </div>
                                        <span className='pl-4'>
                                            {user.name.first + ' ' + user.name.last}
                                        </span>
                                    </div>
                                    <span className='sm:text-left text-right'>(<ObfuscatedEmail email={user.email} />)</span>
                                    <div className='text-white'>
                                        <span className={
                                            user.access == 'admin'
                                                ? 'bg-red-500 p-2 rounded-lg'
                                                : user.access == 'scrum master'
                                                    ? 'bg-orange-500 p-2 rounded-lg'
                                                    : user.access == 'ui/ux'
                                                        ? 'bg-yellow-500 p-2 rounded-lg'
                                                        : user.access == 'ux'
                                                            ? 'bg-green-500 p-2 rounded-lg'
                                                            : user.access == 'manager'
                                                                ? 'bg-indigo-500 p-2 rounded-lg'
                                                                : user.access == 'supervisor'
                                                                    ? 'bg-violet-500 p-2 rounded-lg'
                                                                    : user.access == 'user'
                                                                        ? 'bg-blue-500 p-2 rounded-lg'
                                                                        : 'bg-purple-500'
                                        }
                                        >
                                            {user.access}
                                        </span>
                                    </div>
                                    <div className='sm:flex text-md flex items-center justify-center gap-3'>
                                        <div className='bg-purple-200 p-3 rounded-lg'>
                                            <RiSmartphoneFill className='text-purple-800' />
                                        </div>
                                        <span>{user.phone}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Users;
