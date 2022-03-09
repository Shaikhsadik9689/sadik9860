import React from 'react';
import { Button, ButtonGroup, ButtonToolbar, NavDropdown, Navbar,Container,Nav,ListGroupItem,Card,ListGroup } from "react-bootstrap";

const Form = () => {
    return (
        <div>
          <h1>Form</h1>
            <Button variant="secondary">Secondary</Button>
            <div>
  <Button variant="primary">Primary</Button>{' '}
  <Button variant="secondary">Secondary</Button>{' '}
  <Button variant="success">Success</Button>{' '}
  <Button variant="warning">Warning</Button>{' '}
  <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
  <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
  <Button variant="link">Link</Button>
</div>
<>
  <Button variant="outline-primary">Primary</Button>{' '}
  <Button variant="outline-secondary">Secondary</Button>{' '}
  <Button variant="outline-success">Success</Button>{' '}
  <Button variant="outline-warning">Warning</Button>{' '}
  <Button variant="outline-danger">Danger</Button>{' '}
  <Button variant="outline-info">Info</Button>{' '}
  <Button variant="outline-light">Light</Button>{' '}
  <Button variant="outline-dark">Dark</Button>
  
</>
<>
  <Button href="#">Link</Button> <Button type="submit">Button</Button>{' '}
  <Button as="input" type="button" value="Input" />{' '}
  <Button as="input" type="submit" value="Submit" />{' '}
  <Button as="input" type="reset" value="Reset" />
</>
{/* <div>
  <h1>
    Example heading <Badge bg="secondary">New</Badge>
  </h1>
  <h2>
    Example heading <Badge bg="secondary">New</Badge>
  </h2>
  <h3>
    Example heading <Badge bg="secondary">New</Badge>
  </h3>
  <h4>
    Example heading <Badge bg="secondary">New</Badge>
  </h4>
  <h5>
    Example heading <Badge bg="secondary">New</Badge>
  </h5>
  <h6>
    Example heading <Badge bg="secondary">New</Badge>
  </h6>
</div> */}
<ButtonGroup aria-label="Basic example">
  <Button variant="secondary">Left</Button>
  <Button variant="secondary">Middle</Button>
  <Button variant="secondary">Right</Button>
</ButtonGroup>
<ButtonToolbar aria-label="Toolbar with button groups">
  <ButtonGroup className="me-2" aria-label="First group">
    <Button>1</Button> <Button>2</Button> <Button>3</Button> <Button>4</Button>
  </ButtonGroup>
  <ButtonGroup className="me-2" aria-label="Second group">
    <Button>5</Button> <Button>6</Button> <Button>7</Button>
  </ButtonGroup>
  <ButtonGroup aria-label="Third group">
    <Button>8</Button>
  </ButtonGroup>
</ButtonToolbar>
<div>
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>
<div>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Shaikh Sadik
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
</div>
        </div>
    );
};

export default Form;