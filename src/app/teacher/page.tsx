"use client"
/* eslint-disable react/no-unescaped-entities */
import Teacher from '@/components/Teacher/Teacher'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";

const Page = () => {
    const { push } = useRouter()

    return (
        <div className='flex flex-col gap-3'>
            <span className='font-medium text-[14px] mb-[1rem] lg:hidden flex items-center gap-2 cursor-pointer' onClick={() => push('/student')}><FaArrowLeftLong /> Go to Student's Page</span>
            <h1 className='font-bold text-[22px]'>Teacher Page</h1>
            <Teacher />
        </div>
    )
}

export default Page