"use client"
import React, { useState } from 'react'

import { FilledButton } from '@/shared/UIs/CustomButtons';

import AddTeacherModal from './AddTeacherModal';
import TeacherList from './TeacherList';

const Teacher = () => {
    const [showCreateModal, setShowCreateModal] = useState<boolean>(false);
    const toggleCreateModal = () => {
        setShowCreateModal((prev) => !prev);
    };
    return (
        <>
            {showCreateModal && (
                <AddTeacherModal
                    isModalOpen={showCreateModal}
                    setOpenModal={setShowCreateModal}
                />
            )}
            <div className="flex flex-col gap-2">
                <div className="flex justify-end">
                    <FilledButton name="Add Teacher" onClick={toggleCreateModal} className="bg-blue-500 text-[white]" />
                </div>
                <TeacherList />
            </div>
        </>
    )
}

export default Teacher