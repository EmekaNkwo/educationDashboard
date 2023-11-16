"use client"
import { ColumnsType } from 'antd/es/table';
import React, { useEffect, useState } from 'react'
import { Table } from 'antd';
import { useGetStudentsQuery } from '@/redux/api/studentApi';

const StudentList = () => {
    const { data, isLoading, isSuccess, isError, error } = useGetStudentsQuery({})
    const [students, setStudents] = useState<Student[]>([]);
    useEffect(() => {
        if (isSuccess) {
            setStudents(data?.data)
        }
        if (isError) {
            console.log(error);
        }
    }, [data, error, isError, isSuccess])
    const columns: ColumnsType<Student> = [

        {
            title: 'First Name',
            dataIndex: 'firstname',
        },
        {
            title: 'Surname',
            dataIndex: 'surname',
        },
        {
            title: 'Phone Number',
            dataIndex: 'student_number',
        },
        {
            title: 'National ID',
            dataIndex: 'nationalId',
        },
        {
            title: 'Date of Birth',
            dataIndex: 'dob',
        }


    ];
    return (
        <>
            <Table columns={columns} pagination={false} loading={isLoading} className='shadow-sm' dataSource={students} scroll={{ x: 600 }} bordered />
        </>
    )
}

export default StudentList