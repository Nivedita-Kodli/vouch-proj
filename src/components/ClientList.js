import React from 'react'
import Paginations from './Paginations';
import Table from 'react-bootstrap/Table';
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { Button } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import { GrView } from "react-icons/gr";
import { MdOutlineModeEdit } from "react-icons/md";
import { MdBlock } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

import "./ClientList.css"

const ClientList = () => {
    return (
        <div className='client-list d-flex flex-column justify-content-between'>
            <div className='m-3'>
                <Table striped bordered hover responsive size="sm">
                    <thead>
                        <tr>
                            <th>Company Name</th>
                            <th>Email Address</th>
                            <th>Phone No</th>
                            <th>Contact Person</th>
                            <th>Facilitator</th>
                            <th>Sites</th>
                            <th>Tenants</th>
                            <th>Tenants Group</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <div className='d-flex align-items-center'>
                                <div style={{ width: "30px", height: "30px", borderRadius: "50%", border: "1px solid black", margin: "5px" }}></div>
                                <td>Infosys</td>
                            </div>
                            <td>management@infosys.com</td>
                            <td>+91 7007191276</td>
                            <td>Vijayent Roy</td>
                            <td>--</td>
                            <td>12</td>
                            <td>--</td>
                            <td>--</td>
                            <td> <Dropdown>
                                <Dropdown.Toggle variant="outline">
                                    <BsThreeDotsVertical />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1"><GrView className='me-2' />View Details</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2"><MdOutlineModeEdit className='me-2' />Edit</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3"><MdBlock className='me-2' />Block Access</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3"> <RiDeleteBin6Line className='me-2' /> Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown> </td>
                        </tr>
                        <tr>
                            <div className='d-flex align-items-center'>
                                <div style={{ width: "30px", height: "30px", borderRadius: "50%", border: "1px solid black", margin: "5px" }}></div>
                                <td>Wipro</td>
                            </div>
                            <td>management@wipro.com</td>
                            <td>+91 9453674845</td>
                            <td>Kalpit Soni</td>
                            <td>--</td>
                            <td>8</td>
                            <td>--</td>
                            <td>--</td>
                            <td> <Dropdown>
                                <Dropdown.Toggle variant="outline">
                                    <BsThreeDotsVertical />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1"><GrView className='me-2' />View Details</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2"><MdOutlineModeEdit className='me-2' />Edit</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3"><MdBlock className='me-2' />Block Access</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3"> <RiDeleteBin6Line className='me-2' /> Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown> </td>
                        </tr>
                        <tr>
                            <div className='d-flex align-items-center'>
                                <div style={{ width: "30px", height: "30px", borderRadius: "50%", border: "1px solid black", margin: "5px" }}></div>
                                <td>Accenture</td>
                            </div>
                            <td>management@accenture.com</td>
                            <td>+91 6758943678</td>
                            <td>Drishti Sane</td>
                            <td>--</td>
                            <td>4</td>
                            <td>--</td>
                            <td>--</td>
                            <td> <Dropdown>
                                <Dropdown.Toggle variant="outline">
                                    <BsThreeDotsVertical />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1"><GrView className='me-2' />View Details</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2"><MdOutlineModeEdit className='me-2' />Edit</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3"><MdBlock className='me-2' />Block Access</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3"> <RiDeleteBin6Line className='me-2' /> Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown> </td>
                        </tr>
                        <tr>
                            <div className='d-flex align-items-center'>
                                <div style={{ width: "30px", height: "30px", borderRadius: "50%", border: "1px solid black", margin: "5px" }}></div>
                                <td>Capgemini</td>
                            </div>
                            <td>management@capgemini.com</td>
                            <td>+91 9875640095</td>
                            <td>Aisha Keer</td>
                            <td>--</td>
                            <td>6</td>
                            <td>--</td>
                            <td>--</td>
                            <td> <Dropdown>
                                <Dropdown.Toggle variant="outline">
                                    <BsThreeDotsVertical />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1"><GrView className='me-2' />View Details</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2"><MdOutlineModeEdit className='me-2' />Edit</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3"><MdBlock className='me-2' />Block Access</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3"> <RiDeleteBin6Line className='me-2' /> Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown> </td>
                        </tr>
                        <tr>
                            <div className='d-flex align-items-center'>
                                <div style={{ width: "30px", height: "30px", borderRadius: "50%", border: "1px solid black", margin: "5px" }}></div>
                                <td>Lodha</td>
                            </div>
                            <td>management@lodha.com</td>
                            <td>+91 94567908708</td>
                            <td>Kanika Khare</td>
                            <td>--</td>
                            <td>24</td>
                            <td>--</td>
                            <td>--</td>
                            <td> <Dropdown>
                                <Dropdown.Toggle variant="outline">
                                    <BsThreeDotsVertical />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1"><GrView className='me-2' />View Details</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2"><MdOutlineModeEdit className='me-2' />Edit</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3"><MdBlock className='me-2' />Block Access</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3"> <RiDeleteBin6Line className='me-2' /> Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown> </td>
                        </tr>
                        <tr>
                            <div className='d-flex align-items-center'>
                                <div style={{ width: "30px", height: "30px", borderRadius: "50%", border: "1px solid black", margin: "5px" }}></div>
                                <td>TCS</td>
                            </div>
                            <td>management@tcs.com</td>
                            <td>+91 96442538450</td>
                            <td>Prabhat Rao</td>
                            <td>--</td>
                            <td>10</td>
                            <td>--</td>
                            <td>--</td>
                            <td> <Dropdown>
                                <Dropdown.Toggle variant="outline">
                                    <BsThreeDotsVertical />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1"><GrView className='me-2' />View Details</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2"><MdOutlineModeEdit className='me-2' />Edit</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3"><MdBlock className='me-2' />Block Access</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3"> <RiDeleteBin6Line className='me-2' /> Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown> </td>
                        </tr>
                        <tr>
                            <div className='d-flex align-items-center'>
                                <div style={{ width: "30px", height: "30px", borderRadius: "50%", border: "1px solid black", margin: "5px" }}></div>
                                <td>HCl</td>
                            </div>
                            <td>management@hcl.com</td>
                            <td>+91 9789009484</td>
                            <td>Venkat Pant</td>
                            <td>--</td>
                            <td>5</td>
                            <td>--</td>
                            <td>--</td>
                            <td> <Dropdown>
                                <Dropdown.Toggle variant="outline">
                                    <BsThreeDotsVertical />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1"><GrView className='me-2' />View Details</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2"><MdOutlineModeEdit className='me-2' />Edit</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3"><MdBlock className='me-2' />Block Access</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3"> <RiDeleteBin6Line className='me-2' /> Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown> </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div className='d-flex justify-content-between align-items-center m-3 '>
                <Paginations />
                <div>
                    <Button variant='outline-secondary me-2'> <AiOutlineLeft /> Previous</Button>
                    <Button variant='outline-primary ms-2 me-2'>Next <AiOutlineRight /></Button>
                </div>
            </div>
        </div>
    )
}

export default ClientList