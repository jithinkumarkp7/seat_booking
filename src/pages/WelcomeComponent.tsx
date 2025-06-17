import React, { useState } from 'react'

const WelcomeComponent = () => {

    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setName('');
        if ((name)) {
            setMessage(`Welcome ${name}`);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='flex gap-2'>
                <input type='text'
                    placeholder='Enter your name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='border border-gray-300 p-2 rounded-md'
                />
                <button type='submit' className='bg-blue-500 text-white p-2 rounded-md'>Submit</button>
            </form>
            {message && <p className='mt-4'>{message}</p>}
        </div>
    )
}

export default WelcomeComponent