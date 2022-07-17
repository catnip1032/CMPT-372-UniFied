import { useState } from 'react';
import { Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import { BsPlusLg } from 'react-icons/bs';
import { MdEvent, MdEventAvailable } from 'react-icons/md';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Events = () => {
  
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [startDate, setStartDate] = useState(new Date());
  
  return (
    <>
    <Button style={{marginTop:'16px'}} variant="primary" onClick={handleShow}>
        <BsPlusLg/> Host an Invitation
    </Button>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Event Invitation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Event Title</Form.Label>
              <Form.Control type="text"/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Event Date</Form.Label>
              <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} customInput={<Form.Control/>}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Event Place</Form.Label>
              <Form.Control as="textarea" rows={1} />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Choose Friends</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Event Details</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Sent Invitation
          </Button>
        </Modal.Footer>
    </Modal>


    <h2 style={{fontWeight: "bold", marginTop:'24px'}}>
        <MdEvent/> Upcoming Events
    </h2>
    <Row>
        <Col sm={6} md={4} style={{padding:'16px'}}> 
            <Card>
                <Card.Img variant="top" style={{height:'144px'}} src="https://lvccld.bibliocommons.com/events/uploads/images/full/1f7ae4a8438af0035cc81aa9f2f9ed17/Untitled%20design.png" />
                <Card.Body>
                    <Card.Title>Chess Club</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
        <Col sm={6} md={4} style={{padding:'16px'}}> 
            <Card>
                <Card.Img variant="top" style={{height:'144px'}} src="https://i0.wp.com/cms.babbel.news/wp-content/uploads/2017/06/SpanishToPractice_Header-20170628095429.png?fit=700%2C394&strip=none&ssl=1" />
                <Card.Body>
                    <Card.Title>Speak Spanish</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
    </Row>
    <h2 style={{fontWeight: "bold", marginTop:'24px'}}>
        <MdEventAvailable/> Past Events
    </h2>
    <Row>
        <Col sm={6} md={4} style={{padding:'16px'}}> 
            <Card>
                <Card.Img variant="top" style={{height:'144px'}} src="https://media.istockphoto.com/photos/book-club-concept-a-stack-of-books-and-coffee-on-a-desk-with-chalk-picture-id1370490664?b=1&k=20&m=1370490664&s=170667a&w=0&h=aThH59R4lYiTfXPhvMYjv9w81tVXrevs4cbUb60b0OE=" />
                <Card.Body>
                    <Card.Title>Book Club Meetup</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
        <Col sm={6} md={4} style={{padding:'16px'}}> 
            <Card>
                <Card.Img variant="top" style={{height:'144px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWdxdwx_tiBIOj-i4yx1eKnE346OW36rEk3A&usqp=CAU" />
                <Card.Body>
                    <Card.Title>Bike Club</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
    </Row>
    </>

  )
}

export default Events