import Container from 'react-bootstrap/Container';
import NavigationBar from "../components/NavigationBar"
import Nav from 'react-bootstrap/Nav';
import { Col, Row, Image} from 'react-bootstrap';
import { BsGeo, BsCalendar2Check, BsPeople, BsBookmarkHeart, BsPlusLg} from "react-icons/bs";
import { MdEvent, MdEventAvailable} from "react-icons/md";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Groups from "../components/Profile/Groups"
import Events from '../components/Profile/Events';
import Interests from '../components/Profile/Interests';
import Friends from '../components/Profile/Friends';


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
               <Groups/>
            </Tab>
            <Tab eventKey="Events" title="Events">
                <Events/>
            </Tab>
            <Tab eventKey="Interests" title="Interests">
                <Interests/>
            </Tab>
            <Tab eventKey="Friends" title="Friends">
                <Friends/>
            </Tab>
            </Tabs>
        </Row>
        </Container>
    </>
  )
}

export default Profile