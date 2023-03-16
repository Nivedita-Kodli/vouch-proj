import React from 'react'
import Sidebar from '../components/Sidebar'
import ViewClient from '../components/ViewClient'

const AdminPage = () => {
    return (
        <div className='main-page d-flex'>
            <Sidebar />
            <ViewClient />
        </div>
    )
}

export default AdminPage