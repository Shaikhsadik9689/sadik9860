import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h1>Footer</h1>
        <div>
           {/* <label type="text" placeholder="Enter Your Email">Subscribe</label> */}
           <input type="text" placeholder="Enter Email" />
            <button>Subscribe</button>
       {/* <input className="m-2" type="text" placeholder="Enter Email Here">Subscribe Now</input> */}
        </div>
        <div className="content-footer">
            <h3>Partnership</h3>
                <ui>
                   <li>Websites</li>
                   <li>Social Media</li>
                   <li>Branding</li>
                </ui>
          </div>
          <div className="content-footer">
              <h3>About</h3>
                 <ui>
                     <li>Our Projects</li>
                     <li>Careers</li>
                 </ui>
          </div>
          <div className="content-footer">
              <h3>Support</h3>
                 <ui>
                    <li>Support Request</li>
                    <li>Contact</li>
                 </ui>
          </div>
        <hr />
           <div>
               <p>All rights reserved 2020</p>
           </div>
    </div>
  );
}

export default Footer;