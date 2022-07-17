import Container from 'react-bootstrap/Container';
import NavigationBar from "../components/NavigationBar"
import Nav from 'react-bootstrap/Nav';
import { Col, Row, Image} from 'react-bootstrap';
import { BsGeo, BsCalendar2Check, BsPeople, BsBookmarkHeart} from "react-icons/bs";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Profile = () => {
  // page content
  
  return (
    <>
        <NavigationBar />
        <Container fluid style={{maxWidth:'900px', margin:'0 auto', marginTop:'48px'}}>
        <Row>
            <Col sm={6} md={4}>
                <Image width="100%" src="https://cdn.drawception.com/images/avatars/647493-B9E.png" roundedCircle />
            </Col>
            <Col>
            <div>
                <h2 style={{fontWeight: "bold", marginTop:'24px'}}>
                    Cagla I
                </h2>
                <h6 style={{marginTop:'16x'}}>
                    Member since July 2022
                </h6>
                <h6 className="text-secondary" style={{marginTop:'24px'}}>
                    <BsGeo /> Vancouver, BC 
                </h6>
                <h6 className="text-secondary" >
                    <BsBookmarkHeart /> Simon Fraser University
                </h6>
                <h6 className="text-secondary" >
                    <BsCalendar2Check /> Attended 1 Events
                </h6>
                <h6>
                    <BsPeople /> Friends with 456
                </h6>

            </div>
            </Col>
        </Row>
        <Row>
            <Col style={{display:'flex', justifyContent:'flex-end', marginTop:'24px'}}>
                <Button  size="sm" variant="outline-primary">Edit profile</Button>{' '}
            </Col>
        </Row>
        <Row style={{marginTop:'32px'}}>
        <Tabs
            defaultActiveKey="Groups"
            id="justify-tab-example"
            className="mb-3"
        
            >
            <Tab eventKey="Groups" title="Groups">
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
                            <Card.Img variant="top" style={{height:'144px'}} src="https://secure.meetupstatic.com/photos/event/9/5/1/6/600_471398166.jpeg" />
                            <Card.Body>
                                <Card.Title>Data Science </Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Tab>
            <Tab eventKey="Events" title="Events">
                <h2 style={{fontWeight: "bold", marginTop:'24px'}}>
                        Upcoming Events
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
                        Past Events
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
            </Tab>
            <Tab eventKey="Interests" title="Interests">
                <Button style={{margin:'16px'}} variant="primary">
                    SFU CompSci 
                </Button>
                <Button style={{margin:'16px'}} variant="primary">
                    Dog Rescue
                </Button>
            </Tab>
            <Tab eventKey="Friends" title="Friends">
                Friends :)
            </Tab>
            </Tabs>
        </Row>
        </Container>
    </>
  )
}

export default Profile