import React, { useState, useEffect } from 'react';
import { BsShieldFillCheck } from 'react-icons/bs';

export default function Success({ message, timeout = 3000, onClose }) {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
            onClose && onClose();
        }, timeout);

        return () => clearTimeout(timer);
    }, [timeout, onClose]);

    return show ? (
        <div className='mx-auto w-80 text-white font-bold'>
            <div className='flex items-center justify-center gap-4 mx-auto border border-amber-400 rounded-lg text-md text-center bg-opacity-5 bg-gradient-to-r from-green-400 to-green-900'>
                {message} <BsShieldFillCheck className='w-8 h-8 text-amber-200' />
            </div>
        </div>
    ) : null;
}
