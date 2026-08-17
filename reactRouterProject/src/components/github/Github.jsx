import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl rounded-lg'>
            <p className='text-xl mb-2 font-semibold'>{data.name || data.login}</p>
            <p className='text-lg mb-4'>Github followers: {data.followers}</p>
            <img 
                className='rounded-full mx-auto shadow-md' 
                src={data.avatar_url} 
                alt="GitHub avatar" 
                width={200} 
            />
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Ayesha3315')
    return response.json()
}