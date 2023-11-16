import { ColumnsType } from 'antd/es/table';
import React from 'react'
import { Table } from 'antd';

interface DataType {
    id: number
    nationalId: string;
    title: string;
    salary?: string;
    firstName: string;
    surname: string;
    phone_number?: string;
    dob: string;
}

interface IProps {
    data?: DataType[]
}
const TeacherList = ({ data }: IProps) => {
    const columns: ColumnsType<DataType> = [
        {
            title: 'Title',
            dataIndex: 'title',
        },
        {
            title: 'First Name',
            dataIndex: 'firstName',
        },
        {
            title: 'Surname',
            dataIndex: 'surname',
        },
        {
            title: 'Phone Number',
            dataIndex: 'phone_number',
        },
        {
            title: 'National ID',
            dataIndex: 'nationalId',
        },
        {
            title: 'Salary',
            dataIndex: 'salary',
        },
        {
            title: 'Date of Birth',
            dataIndex: 'dob',
        }


    ];
    return (
        <>
            <Table columns={columns} className='shadow-sm' dataSource={data} scroll={{ x: 600 }} bordered />
        </>
    )
}

export default TeacherList