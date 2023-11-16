"use client";
import { ColumnsType } from 'antd/es/table';
import React, { useEffect, useState } from 'react'
import { Table } from 'antd';

import { useGetTeachersQuery } from '@/redux/api/teacherApi';

const TeacherList = () => {
    const { data, isLoading, isSuccess, isError, error } = useGetTeachersQuery({})
    const [teachers, setTeachers] = useState<ITeacher[]>([]);

    useEffect(() => {
        if (isSuccess) {
            setTeachers(data?.data)
        }
        if (isError) {
            console.log(error);
        }
    }, [data?.data, error, isError, isSuccess]);

    const columns: ColumnsType<ITeacher> = [
        {
            title: 'Title',
            dataIndex: 'title',
        },
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
            dataIndex: 'teacher_number',
        },
        {
            title: 'National ID',
            dataIndex: 'nationalId',
        },
        {
            title: 'Salary',
            dataIndex: "salary",
            render: (salary: string | number) => <span>{salary === null ? 'N/A' : salary}</span>,
        },
        {
            title: 'Date of Birth',
            dataIndex: 'dob',
        }
    ];
    return (
        <>
            <Table columns={columns} pagination={false} loading={isLoading} className='shadow-sm' dataSource={teachers} scroll={{ x: 600 }} bordered />
        </>
    )
}

export default TeacherList