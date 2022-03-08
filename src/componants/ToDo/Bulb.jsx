import React, { useState } from "react";
import "./BgDisplay.css";
import { Row, Col, Button } from "react-bootstrap";

export const Bulb = () => {
  const [cls, setCls] = useState("bulbOff");
  return (
    <Row>
      <Col>
         <div className={cls}>
            <h1>Bulb</h1>
              <Button onClick={() => (cls === "bulb" ? 
                      setCls("bulbOff") : setCls("bulb"))}
                      variant={cls === "bulb" ? 
                      "danger" : "success"}>
                      {cls === "bulb" ? "Band" : "Chalu"}
             </Button>
        </div>
     </Col>
     <Col>
       <div>
       <p>
         Lorem ipsum dolor sit amet consectetur 
         adipisicing elit. Nobis, consectetur. Nam,
       </p>
      </div>
     </Col>
    </Row>
  );
};