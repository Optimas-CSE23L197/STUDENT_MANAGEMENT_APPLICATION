import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HeadDashboard from '../head/HeadDashboard'
import AddTeachers from '../head/AddTeachers'

function AppRoutes() {
    return (
        <Routes>
            <Route path='/head/dashboard' element={<HeadDashboard />} />
            <Route path='/head/add-teachers' element={<AddTeachers />} />
        </Routes>
    )
}

export default AppRoutes