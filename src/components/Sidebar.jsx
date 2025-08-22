import React from 'react'
import { FiUsers, FiSettings, FiBook, FiCreditCard, FiClipboard } from "react-icons/fi";


function Sidebar() {
    const sidebarMenu = [
        { title: "Dashboard", icon: <FiBook />, link: "/head/dashboard" },
        { title: "Teachers", icon: <FiUsers />, link: "/head/add-teachers" },
        { title: "Students / Classes", icon: <FiBook /> },
        { title: "Billing", icon: <FiCreditCard /> },
        { title: "Settings & Profile", icon: <FiSettings /> },
        { title: "Exams", icon: <FiClipboard /> },
    ];
    return (
        <aside className="w-64 bg-blue-900 text-white flex flex-col p-6">
            <div className="flex items-center mb-10">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-900 font-bold">U</div>
                <span className="ml-3 font-semibold text-lg">Udemy Inter. School</span>
            </div>
            <ul className="flex flex-col gap-4">
                {sidebarMenu.map((menu, idx) => (
                    <li key={idx}>
                        <a
                            href={menu.link}
                            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
                        >
                            <span className="text-lg">{menu.icon}</span>
                            <span>{menu.title}</span>
                        </a>
                    </li>
                ))}
            </ul>
            <div className="mt-auto">
                <button className="w-full bg-white text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
                    Log Out
                </button>
            </div>
        </aside>
    )
}

export default Sidebar