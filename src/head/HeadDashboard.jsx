import React from "react";
import { FiUsers, FiSettings, FiBook, FiCreditCard, FiClipboard } from "react-icons/fi";
import Sidebar from "../components/Sidebar";

const AdminDashboard = () => {
    const actions = [
        { title: "Add other admins", description: "Create rich course content and coaching products for your students. When you give them a pricing plan, they'll appear on your site." },
        { title: "Add classes", description: "Create rich course content and coaching products for your students. When you give them a pricing plan, they'll appear on your site." },
        { title: "Add students", description: "Create rich course content and coaching products for your students. When you give them a pricing plan, they'll appear on your site." },
    ];

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <main className="flex-1 p-10">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <p className="text-gray-500 mb-2">Welcome to your dashboard, Udemy school</p>
                        <h1 className="text-3xl font-bold">Uyo/school/@teachable.com</h1>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                        Support
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    {actions.map((action, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
                            <h2 className="font-semibold text-lg mb-2">{action.title}</h2>
                            <p className="text-gray-500 text-sm">{action.description}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;
