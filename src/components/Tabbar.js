import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom'

const Tabbar = () => {
    return (
        <Nav className='d-flex justify-content-between p-3 m-2' variant='tabs' defaultActiveKey="/create-profile">
            <Nav.Item>
                <NavLink to="/add-client/create-profile">01 Create Profile</NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink to="/add-client/payment-setup">02 Payment Setup</NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink to="/add-client/theme-setup">
                    03 Theme Setup
                </NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink to="/add-client/modules-setup">
                    04 Module Setup
                </NavLink>
            </Nav.Item>
        </Nav>
    )
}

export default Tabbar