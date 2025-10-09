import { Rating } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="footer mt-auto py-3 font2" id="footer-btn">
        <div className="container text-center">
            <div className="row">
                <div className="col-md-4">
                    <h5>About Us</h5>
                    <p>Have the best experience with Amiri.</p>
                </div>
                <div className="col-md-4">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><a href="#">Home</a></li>
                    </ul>
                    <Rating name="size-small" defaultValue={2} size="small" />
                </div>
                <div className="col-md-4">
                    <h5>Contact Us</h5>
                    <p>Email: gitamiraddress1387@gmail.com</p>
                    <p>Phone: +98 939 589 7369</p>
                </div>
            </div>
            <hr/>
            <p>{' '} - برنامه نویس و توسعه‌دهنده: <span className='text-accent'>امیر عباس مرادی</span> | پشتیبانی: <span className='text-accent'>09395897369</span></p>
        </div>
    </footer>
    </div>
  )
}

export default Footer
