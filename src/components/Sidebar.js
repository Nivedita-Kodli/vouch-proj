import React from 'react'
import Form from 'react-bootstrap/Form';
import { RxExit } from "react-icons/rx"
import { NavLink } from 'react-router-dom';

import "./Sidebar.css"

const Sidebar = () => {
    return (
        <div className='sidebar-container d-flex flex-column justify-content-between m-2'>
            <div className='top'>
                <div className='company mt-3'>Company name</div>
                <div className='search-box mt-3'>
                    <Form.Control type="text" placeholder="Search Modules" />
                </div>
                <div className='client-record mt-3'>client master</div>
                <NavLink to='/admin'><div className='view-client mt-3'>View Clients</div></NavLink>
                <NavLink to='/add-client'><div className='add-client mt-3'>Add Client</div></NavLink>
            </div>
            <div className='bottom d-flex align-items-center mb-3' >
                <div className='image-sidebar me-3 p-2'></div>
                <div className='d-flex justify-content-between align-items-center w-100'>
                    <div>
                        <div className='username'>James Burton</div>
                        <div className='user-email'>james@thevouch.digital</div>
                    </div>

                    <div className='me-4 icon'><RxExit /></div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar