// A list that holds event cards
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import EventCard from "./EventCard"

interface EventCardListProps {
    sortingCombinations: any[]
}

class Event {
    title: string;
    date: string;
    location: string;
    image: string;
    day: string;
    type: string;
    distance: string;
    category: string;
    university: string;
   
    constructor(
        title: string, date: string, location: string, 
        image: string, day: string, type: string, distance: string, 
        category: string, university: string) {
      this.date = date;
      this.title = title;
      this.location = location;
      this.image = image;
      this.day = day;
      this.type = type;
      this.distance = distance;
      this.category = category;
      this.university = university;
    }
}


const EventCardList = (eventCardListProps: EventCardListProps) => {
    function createAnEvent(eventString: string) {
        let tokenizedEventString = eventString.split(";");
        let title = tokenizedEventString[0].split(":").reverse()[0];
        let date = tokenizedEventString[1].split(":").reverse()[0];
        let location = tokenizedEventString[2].split(":").reverse()[0];
        let image = tokenizedEventString[3].split(":").reverse()[0];
        let day = tokenizedEventString[4].split(":").reverse()[0];
        let type = tokenizedEventString[5].split(":").reverse()[0];
        let distance = tokenizedEventString[6].split(":").reverse()[0];
        let category = tokenizedEventString[7].split(":").reverse()[0];
        let university = tokenizedEventString[8].split(":").reverse()[0];
    
        let event = new Event(title, date, location, image, day, type, distance, category, university);
        return event;
    }
    
    function getAllEvents() {
        //TODO: make call to api, format response in list, return list
        // Testing events only****
        let testingEvents = [
            "title:Event1;date:Aug 1st, 2022;location:SFU AQ;image:example.jpg;day:Whenever;type:Any;distance:Whereever;category:Any;university:Any",
            "title:Event2;date:Aug 1st, 2022;location:SFU AQ;image:example.jpg;day:Today;type:Any;distance:Whereever;category:Any;university:Simon Fraser University",
            "title:Event3;date:Aug 1st, 2022;location:SFU AQ;image:example.jpg;day:Whenever;type:Any;distance:100 km;category:Technology;university:Any",
            "title:Event4;date:Aug 1st, 2022;location:SFU AQ;image:example.jpg;day:Whenever;type:Any;distance:Whereever;category:Any;university:Any",
        ]
        return testingEvents;
    }

    function filterEventsBySortingCombination(allEventStrings: string[]){
        let resultingEventStrings: string[] = [];
    
        allEventStrings.forEach(function (eventString: string) {
            let sortDay = eventCardListProps.sortingCombinations[0];
            let sortType = eventCardListProps.sortingCombinations[1];
            let sortDistance = eventCardListProps.sortingCombinations[2];
            let sortCategory = eventCardListProps.sortingCombinations[3];
            let sortUniversity = eventCardListProps.sortingCombinations[4];
    
            let tokenizedEventString = eventString.split(";");
            let day = tokenizedEventString[4].split(":").reverse()[0];
            let type = tokenizedEventString[5].split(":").reverse()[0];
            let distance = tokenizedEventString[6].split(":").reverse()[0];
            let category = tokenizedEventString[7].split(":").reverse()[0];
            let university = tokenizedEventString[8].split(":").reverse()[0];

            if (
                (day === sortDay || sortDay === "Whenever") && 
                (type === sortType || sortType === "Any") &&
                (distance === sortDistance || sortDistance === "Whereever") &&
                (category === sortCategory || sortCategory === "Any") &&
                (university === sortUniversity || sortUniversity === "Any")
                ) {
                resultingEventStrings.push(eventString)
            }
        })

        return resultingEventStrings;
    }

    let sortedEvents: Array<Event> = [];

    const allEventStrings = getAllEvents()

    let resultingEventStrings: string[] = filterEventsBySortingCombination(allEventStrings);

    resultingEventStrings.forEach(function (eventString: string) {
        let newEvent = createAnEvent(eventString);
        sortedEvents.push(newEvent);
    }); 

    return (
        <Row xs={1} md={1} className="g-4">
        {Array.from(sortedEvents).map((event: Event) => (
                <Col>
                <EventCard
                {...{date: event.date,
                title: event.title,
                location: event.location,
                image: event.image}}
                >
                </EventCard>
                </Col>
        ))}
        </Row>
    )
}

export default EventCardList