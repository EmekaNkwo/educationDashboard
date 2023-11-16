import Teacher from '@/components/Teacher/Teacher'
import React from 'react'

const page = () => {
    return (
        <div className='flex flex-col gap-3'>
            <h1 className='font-bold text-[22px]'>Teacher Page</h1>
            <Teacher />
        </div>
    )
}

export default page