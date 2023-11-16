import Student from '@/components/Student/Student'
import React from 'react'

const page = () => {
    return (

        <div className='flex flex-col gap-3'>
            <h1 className='font-bold text-[22px]'>Student Page</h1>
            <Student />
        </div>
    )
}

export default page