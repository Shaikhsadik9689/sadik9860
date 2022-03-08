import React from "react";
import "./Foot.css";
import { Row, Col } from "react-bootstrap";

const Foot = (props) => {
    return(
        <div className="footer">
          <h1>Foot</h1>
         <div className="content-footer">
           <input type="text" placeholder="Enter Email" />
            <h3>{props.Partnership}</h3> 
              <Row>
                <Col>Websites</Col>
                <Col>Social Media</Col>
                <Col>Branding</Col>
              </Row>
          </div>
          <div className="content-footer">
            <h3>About</h3>
              <Row>
                 <Col>Our Projects</Col>
                 <Col>Careers</Col>
              </Row>
          </div>
          <div className="content-footer">
            <h3>Support</h3>
              <Row>
                <Col>Support Request</Col>
                <Col>Contact</Col>
              </Row>
          </div>
          <hr />
          <div>
              <p>All rights reserved 2020</p>
          </div>
        </div>
    );
}
export default Foot;