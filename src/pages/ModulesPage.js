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

const ModulesPage = () => {
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
                                <div className='mb-3'>
                                    <div className='client-head'>Modules Setup</div>
                                    <div className='client-text'>Select the modules that the client can use.</div>
                                </div>

                                <div className='d-flex'>

                                    <div className='mb-3 left-modules'>
                                        <Form.Check type='checkbox' label="Home/Dashboard" id='modules' />
                                        <Form.Check type='checkbox' label="HelpDesk" id='modules' />
                                        <Form.Check type='checkbox' label="Assets" id='sub-modules' />
                                        <Form.Check type='checkbox' label="Daily Tasks" id='modules' />
                                        <Form.Check type='checkbox' label="PPM" id='modules' />
                                        <Form.Check type='checkbox' label="Employees" id='modules' />
                                        <Form.Check type='checkbox' label="Profiles" id='modules' />
                                        <Form.Check type='checkbox' label="Transactions" id='modules' />
                                    </div>

                                    <div className='mb-3 right-modules'>
                                        <div>Daily Tasks</div>
                                        <div>Select the sub modules that the client can use.</div>
                                        <div style={{ overflow: "scroll", height: "40vh" }}>
                                            <Form.Check type='checkbox' label="Show All Sub Modules" id='sub-modules' />
                                            <Form.Check type='checkbox' label="Summary" id='sub-modules' />
                                            <Form.Check type='checkbox' label="View Tasks" id='sub-modules' />
                                            <Form.Check type='checkbox' label="Create New Task" id='sub-modules' />
                                            <Form.Check type='checkbox' label="Logbook" id='sub-modules' />

                                            <Form.Check type='checkbox' label="Logsheet" id='sub-modules' />
                                            <ul>
                                                <li><Form.Check type='checkbox' label="Daily" id='logsheet-modules' /></li>
                                                <li><Form.Check type='checkbox' label="Activity Wise" id='logsheet-modules' /></li>
                                            </ul>

                                            <Form.Check type='checkbox' label="Alert" id='sub-modules' />
                                            <ul>
                                                <li><Form.Check type='checkbox' label="Log" id='alert-modules' /></li>
                                                <li><Form.Check type='checkbox' label="Asset Wise Summary" id='alert-modules' /></li>
                                                <li><Form.Check type='checkbox' label="Sub Module Name" id='alert-modules' /></li>
                                                <li><Form.Check type='checkbox' label="Date Wise Summary" id='alert-modules' /></li>
                                            </ul>

                                            <Form.Check type='checkbox' label="Tasks" id='sub-modules' />
                                            <ul>
                                                <li><Form.Check type='checkbox' label="Tasks Summary" id='tasks-modules' /></li>
                                                <li><Form.Check type='checkbox' label="Activity Wise Summary" id='tasks-modules' /></li>
                                                <li><Form.Check type='checkbox' label="Site Wise Summary" id='tasks-modules' /></li>
                                            </ul>
                                            <Form.Check type='checkbox' label="Verification" id='sub-modules' />
                                            <Form.Check type='checkbox' label="Remark Log" id='sub-modules' />
                                            <Form.Check type='checkbox' label="Mobile User Log" id='sub-modules' />
                                            <Form.Check type='checkbox' label="Unplanned Tasks Log" id='sub-modules' />
                                            <Form.Check type='checkbox' label="Asset Status Log" id='sub-modules' />
                                            <Form.Check type='checkbox' label="Audit Report Log" id='sub-modules' />
                                            <Form.Check type='checkbox' label="Asset Maintainence KPI's" id='sub-modules' />
                                            <Form.Check type='checkbox' label="Asset Comparision" id='sub-modules' />
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

export default ModulesPage