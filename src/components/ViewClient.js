import React from 'react'
import { SlBell } from "react-icons/sl"
import ClientList from './ClientList'
import Topbar from './Topbar'

import "./ViewClient.css"

const ViewClient = () => {
    return (
        <div className='right-container'>
            <div className='right-header'>
                <div className='client-cat'>View Clients</div>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='client-nav'>Client Master / View Clients</div>
                    <div className='bell-icon' style={{ color: "#686687" }}> <SlBell /> </div>
                </div>
                <div className='center d-flex flex-column'>
                    <Topbar />
                    <ClientList />
                </div>
            </div>
        </div>
    )
}

export default ViewClient