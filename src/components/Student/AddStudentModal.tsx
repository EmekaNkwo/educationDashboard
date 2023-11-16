import { FilledButton } from '@/shared/UIs/CustomButtons';
import { InputField, PhoneNumberInput, SelectField } from '@/shared/UIs/InputField';
import { Modal } from 'antd'
import React from 'react'

interface IModalProps {
    isModalOpen: boolean;
    setOpenModal?: boolean | any;
}
const AddStudentModal = ({ isModalOpen, setOpenModal }: IModalProps) => {
    return (
        <Modal
            title="Add Student"
            open={isModalOpen}
            onOk={() => setOpenModal(false)}
            onCancel={() => setOpenModal(false)}
            cancelButtonProps={{
                style: {
                    display: "none"
                }
            }}
            okButtonProps={{
                style: {
                    display: "none"
                }
            }}
        >
            <form className="flex flex-col gap-2 mt-[1rem]">
                <div className="flex items-center gap-2">
                    <InputField title='National ID number' type='number' />
                </div>
                <div className="flex items-center gap-2">
                    <InputField title='First Name' />
                    <InputField title='Surname' />
                </div>
                <div className="flex items-center gap-2">
                    <InputField title='Date of Birth' type='date' />
                    <PhoneNumberInput title='Phone Number' />
                </div>
                <FilledButton name="Add Student" className="bg-blue-500 text-[white] mt-[1rem]" />
            </form>
        </Modal>
    )
}

export default AddStudentModal