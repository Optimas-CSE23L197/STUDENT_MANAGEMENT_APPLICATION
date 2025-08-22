import React from 'react';
import Sidebar from '../components/Sidebar';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

function AddTeachers() {
    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Heading */}
                <div className="flex justify-between items-center py-4 px-6 border-b border-gray-200">
                    <h2 className="text-2xl font-semibold">Teachers</h2>
                    <div className="flex items-center gap-4">
                        <Link
                            to="#"
                            className="text-blue-500 hover:underline"
                        >
                            Export CSV
                        </Link>
                        <Button name="Add Teachers" />
                    </div>
                </div>

                {/* Search Section */}
                <div className="p-6 flex gap-5">
                    <input
                        type="text"
                        placeholder="Search teachers..."
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    <Button name={"Search"} />
                </div>

                {/* Teachers List */}
                <div className="p-6 flex-1 overflow-auto">
                    {/* Placeholder for teacher list */}
                    <div className="text-gray-400">No teachers found.</div>
                </div>
            </div>
        </div>
    );
}

export default AddTeachers;
