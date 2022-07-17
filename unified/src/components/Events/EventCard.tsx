// A card that holds events
import Card from 'react-bootstrap/Card';

interface EventCardProps {
    date: string,
    title: string,
    location: string,
    image: string,
}


const EventCard = (eventCardProps: EventCardProps) => {
    let date = eventCardProps.date;
    let title = eventCardProps.title;
    let location = eventCardProps.location;
    let image = eventCardProps.image;

    return (
        <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                {date}
            </Card.Text>
            <Card.Text>
                {location}
            </Card.Text>            
            </Card.Body>
        </Card>
    )
}

export default EventCard