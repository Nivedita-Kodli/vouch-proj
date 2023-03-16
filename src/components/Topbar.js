import React from 'react'
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import { CiImport } from "react-icons/ci";

const Topbar = () => {
    return (
        <div className='d-flex justify-content-between align-items-center m-3'>
            <div className='topbar-left'>
                <Form.Control type="text" placeholder="Search" />
            </div>
            <div className='topbar-right d-flex'>
                <Dropdown>
                    <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                        Columns
                    </Dropdown.Toggle>
                </Dropdown>
                <Button variant="outline-secondary"><CiImport /> Export</Button>
            </div>
        </div>
    )
}

export default Topbar