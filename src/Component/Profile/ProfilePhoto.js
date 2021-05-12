import React from "react";
import "./ProfilePhoto.css";
import {Card,Button} from "react-bootstrap"
function ProfilePhoto() {
  return (
    <div className="MyImg" id="about">
      <Card style={{ width: "18rem" ,}}>
        <Card.Img variant="top" src="/Images/photo_dalila.jpg" />
        <Card.Body>
          <Card.Title>Dalila Chouaya</Card.Title>
          <Card.Text>
          Electronics Engineer is looking for a new opportunity as a C/C++ development 
                engineer or embedded engineer.<br/>I have some experience in development as indicated on my resume in C ,
                C++, ...
          </Card.Text>
          <Button variant="primary">KNOW MORE !!</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProfilePhoto;
