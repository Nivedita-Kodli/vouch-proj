import React from 'react'
import Sidebar from '../components/Sidebar'
import { SlBell } from "react-icons/sl"
import Tabbar from '../components/Tabbar'
import Form from 'react-bootstrap/Form';
// import { IoAddCircleOutline } from "react-icons/io5";
import { Button } from 'react-bootstrap';
import { AiOutlineRight } from "react-icons/ai";
import { GrPowerReset } from "react-icons/gr";

import "./AddClientPage.css"

const ThemePage = () => {
    return (
        <div className='d-flex'>
            <Sidebar />
            <div className='right-container'>
                <div className='right-header'>
                    <div className='client-cat'>Add Client</div>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='client-nav'>Client Master / Add Client / Create Client</div>
                        <div className='bell-icon' style={{ color: "#686687" }}> <SlBell /> </div>
                    </div>
                    <div className='center-section'>
                        <div className='center-section-top'>
                            <Tabbar />
                        </div>
                        <div>
                            <Form className='m-3'>
                                <div className=''>
                                    <div className='client-head'>Theme Setup</div>
                                    <div className='client-text'>Add information about the client to give them a personalized experience.</div>
                                </div>

                                <div className='mb-3'>
                                    <Form.Control type='text' defaultValue="#153AC7" />
                                    <Form.Text>Add Hex Value.</Form.Text>
                                </div>

                                <div className='mb-3'>
                                    <div className='h6'>Login Theme</div>
                                    <div className='text-muted'>Select the look and feel of the login page.</div>
                                    <div>
                                        <Form.Check type='radio' label="Use Color" />
                                    </div>
                                    <div>
                                        <Button variant="outline-secondary">#F8F9FD</Button>
                                    </div>
                                </div>
                                <div className='mb-3'>
                                    <div className='h6'>Where Should be the login modal?</div>
                                </div>
                                <div className='mb-3'>
                                    <Form.Check type='radio' inline name='modal-alignment' label="Left"></Form.Check>
                                    <Form.Check type='radio' inline name='modal-alignment' label="Right"></Form.Check>
                                    <Form.Check type='radio' inline name='modal-alignment' label="Center"></Form.Check>
                                </div>

                                <Button variant='primary' className='m-2'>Save & Continue <AiOutlineRight /></Button>
                                <Button variant='outline-secondary' className='m-2'><GrPowerReset className='me-2' />Reset</Button>
                            </Form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThemePage