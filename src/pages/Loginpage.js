import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Loginpage = () => {
    return (
        <div className='wrapper'>
            <div className='left-section d-flex flex-column justify-content-between align-items-center '>

                <div className='image'></div>
                <div>
                    <Form>
                        <h4 className='heading text-center'>Welcome</h4>
                        <p className='heading-text text-center'>Enter your Username and Password.</p>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Username" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <div className="d-grid gap-2 mb-2">
                            <Button variant="primary" type="submit" >
                                Login
                            </Button>
                        </div>
                        <div className='text-center'>
                            <a href='/'>Forget Password?</a>
                        </div>
                    </Form>
                </div>
                <div className='footer'>
                    <div className='footer-text'>Terms of Use </div>
                    <div className='footer-text'>Privacy Policy</div>
                    <div className='footer-copyright'>© Akash 2023. All rights reserved</div>
                </div>

            </div>
            <div className='right-section d-flex flex-column justify-content-around align-items-center '>
                <div className='image'>
                    <div className='rectangle-image-main'></div>
                    <div className='rectangle-image-upper'></div>
                </div>

                <div className='right-content-div'>
                    <h4 className='right-heading'>360° Solutions for Assest Management</h4>
                    <div className='right-texts'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, odio!</div>
                </div>
            </div>
        </div >
    )
}

export default Loginpage