import { useCreateStudentMutation } from '@/redux/api/studentApi';
import { FilledButton } from '@/shared/UIs/CustomButtons';
import { InputField } from '@/shared/UIs/InputField';
import { Modal, message } from 'antd'
import React, { useState, useEffect } from 'react'

interface IModalProps {
    isModalOpen: boolean;
    setOpenModal?: boolean | any;
}
const AddStudentModal = ({ isModalOpen, setOpenModal }: IModalProps) => {
    const [nationalId, setNationalId] = useState<number | undefined>(undefined);
    const [firstName, setFirstName] = useState<string>('');
    const [surname, setSurname] = useState<string>('');
    const [dob, setDob] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');

    const [createStudent, { isLoading, isSuccess, isError, error }] = useCreateStudentMutation()
    const onSubmitDetails = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        if (!nationalId || !firstName || !surname || !dob || !phoneNumber) {
            message.error('Please fill all the fields')
            return
        }
        const payload = {
            firstname: firstName,
            surname: surname,
            nationalId: nationalId,
            dob: dob,
            student_number: phoneNumber
        }

        if (payload) {
            await createStudent(payload)
        }
    }

    useEffect(() => {
        if (isSuccess) {
            message.success('Student added successfully')
            setOpenModal(false)
        }
        if (isError) {
            const errorMesg = error as any
            message.error(errorMesg?.message)
        }
    }, [isSuccess, isError, error, setOpenModal])

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
            <form className="flex flex-col gap-2 mt-[1rem]" onSubmit={onSubmitDetails} data-testid="add_student_form" >
                <div className="flex items-center gap-2">

                    <InputField data-testid="nationalId" data-cy='nationalId_input' title='National ID number' type='number' value={nationalId} onChange={(e) => setNationalId(Number(e.target.value))} />
                </div>
                <div className="flex items-center gap-2 lg:flex-row flex-col" >
                    <InputField data-testid="firstName" data-cy='firstName_input' title='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    <InputField data-testid="surname" data-cy='surname_input' title='Surname' value={surname} onChange={(e) => setSurname(e.target.value)} />
                </div>
                <div className="flex items-center gap-2 lg:flex-row flex-col">
                    <InputField data-testid="dob" data-cy='dob_input' title='Date of Birth' type='date' value={dob} onChange={(e) => setDob(e.target.value)} />
                    <InputField data-testid="phoneNumber" data-cy='phone_input' title='Phone Number' type='number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                </div>
                {isLoading ? <p className='text-center mt-3 font-bold'>Adding...</p> : <FilledButton data-testid="add_student" data-cy='add_student_button' name="Add Student" className="bg-blue-500 text-[white] mt-[1rem]" />}
            </form>
        </Modal>
    )
}

export default AddStudentModal