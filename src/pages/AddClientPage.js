import React from 'react'
import Sidebar from '../components/Sidebar'
import { SlBell } from "react-icons/sl"
import Tabbar from '../components/Tabbar'
import Form from 'react-bootstrap/Form';
import { IoAddCircleOutline } from "react-icons/io5";
import { Button } from 'react-bootstrap';
import { AiOutlineRight } from "react-icons/ai";
import { GrPowerReset } from "react-icons/gr";

import "./AddClientPage.css"




// import ViewClient from '../components/ViewClient'

const AddClientPage = () => {
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
                            <Form>
                                <div className='mt-3'>
                                    <div className='client-head'>Create Client Profile</div>
                                    <div className='client-text'>Add some basic information related to the client.</div>
                                </div>

                                <div className='client-logo d-flex align-items-center className="mb-3"'>
                                    <Form.Label htmlFor='company-logo'>
                                        <IoAddCircleOutline className='text-muted' style={{ width: "10rem", height: "10rem" }} />
                                    </Form.Label>
                                    <Form.Control id='company-logo' type='file' className='d-none' />
                                    <div>
                                        <div className='logo-head'>Company Logo</div>
                                        <div className='text-muted'>Logo ratio should be 1:1 and should be 120px X 120px</div>
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <div className='flex-grow-1 m-2'>
                                        <div>
                                            <Form.Control type="text" className="mb-3" placeholder="Company Name" required />
                                        </div>
                                        <div>
                                            <Form.Select className="mb-3" aria-label="Default select example">
                                                <option>Select Business Category</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </div>
                                        <div>
                                            <Form.Control className="mb-3" type="email" placeholder="Company Email Address" required />
                                        </div>
                                        <div>
                                            <Form.Select className="mb-3" aria-label="Default select example">
                                                <option>Select State</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </div>
                                        <div>
                                            <Form.Control className="mb-3" type="text" placeholder="GST Number" required />
                                        </div>
                                    </div>
                                    <div className='flex-grow-1 m-2'>
                                        <div>
                                            <Form.Control className="mb-3" type="text" placeholder="Website" required />
                                        </div>
                                        <div>
                                            <Form.Select className="mb-3" aria-label="Default select example">
                                                <option>Select Facility Management Company</option>
                                                <option value='none'>None</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </div>
                                        <div>
                                            <Form.Control className="mb-3" type="text" placeholder="Mobile Number" required />
                                        </div>
                                        <div>
                                            <Form.Select className="mb-3" aria-label="Default select example">
                                                <option>Select City</option>
                                                <option value='none'>None</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </div>
                                        <div>
                                            <Form.Control className="mb-3" type="text" placeholder="Fax Number" required />
                                        </div>
                                    </div>
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

export default AddClientPage