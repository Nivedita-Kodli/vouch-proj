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

const PaymentPage = () => {
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
                                    <div className='client-head'>Payment Setup</div>
                                    <div className='client-text'>Set up payments for the clients.</div>
                                </div>

                                <div>
                                    <Form.Control type="text" className="mb-3" placeholder="Billing Address" required />
                                </div>
                                <div className='d-flex align-items-center'>
                                    <div className='flex-grow-1 m-2'>
                                        <div>
                                            <Form.Select className="mb-3" aria-label="Default select example">
                                                <option>Select State</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </div>
                                        <div>
                                            <Form.Select className="mb-3" aria-label="Default select example">
                                                <option>Select Number of Site Access</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </div>
                                        <div>
                                            <Form.Control className="mb-3" type="text" placeholder="Discount(%)" required />
                                        </div>
                                        <Form.Label>Payment Mode</Form.Label>
                                        <div>

                                            <Form.Check inline name='payment-type' label="UPI"></Form.Check>
                                            <Form.Check inline name='payment-type' label="Net Banking"></Form.Check>
                                            <Form.Check inline name='payment-type' label="Cash"></Form.Check>
                                            <Form.Check inline name='payment-type' label="Cheque"></Form.Check>
                                            <Form.Check inline name='payment-type' label="Other"></Form.Check>
                                        </div>
                                    </div>
                                    <div className='flex-grow-1 m-2'>
                                        <div className='d-flex mb-3'>
                                            <Form.Select className="" aria-label="Default select example">
                                                <option>Select City</option>
                                                <option value='none'>None</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                            <Form.Control className="ms-1" type="text" placeholder="Pincode" required />
                                        </div>
                                        <div>
                                            <Form.Control className="mb-3" type="text" placeholder="Payable Rs per site" required />
                                        </div>
                                        <div>
                                            <Form.Control className="mb-3" type="text" placeholder="Reason" required />
                                        </div>
                                        <Form.Label>Payment Status</Form.Label>
                                        <div>

                                            <Form.Check type='radio' inline name='payment-status' label="UPI"></Form.Check>
                                            <Form.Check type='radio' inline name='payment-status' label="Net Banking"></Form.Check>

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

export default PaymentPage