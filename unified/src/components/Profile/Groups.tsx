import { Row, Col, Card, Button } from 'react-bootstrap';

const Groups = () => {
  // page content
  
  return (
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

  )
}

export default Groups