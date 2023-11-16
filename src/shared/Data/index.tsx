import { FaPersonChalkboard } from "react-icons/fa6"
import { PiStudentFill } from "react-icons/pi";
export const sidebarItems = [
    {
        key: '/teacher',
        icon: <FaPersonChalkboard />,
        title: 'Teacher',
    },
    {
        key: '/student',
        icon: < PiStudentFill />,
        title: 'Student',
    },
]