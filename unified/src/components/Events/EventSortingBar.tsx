// Bar for sorting components
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

interface EventSortingBarProps {
    sortingOnClicks: any[]
}


const EventSortingBar = (eventSortingBarProps: EventSortingBarProps) => {
    const sortingOnClicksLocal = eventSortingBarProps.sortingOnClicks

    const sortingTypes = [
        "Day",
        "Type",
        "Distance",
        "Category",
        "University",
    ]

    const sortingLists = [
        [
            "Whenever",
            "Today",
            "Tomorrow",
            "This Week",
            "Next Week",
            "This Month"
        ],
        [
            "Any",
            "In Person Outdoors",
            "In Person Indoors",
            "Online"
        ],
        [
            "Whereever",
            "1 Km",
            "5 km",
            "10 km",
            "25 km",
            "50 km",
            "100 km"
        ],
        [
            "Any",
            "Parties",
            "Hobbies",
            "Academics",
            "Language",
            "Sports & Fitness",
            "Technology",
        ],
        [
            "Any",
            "Simon Fraser University",
            "University of British Columbia",
            "University of Victoria",
            "Capilano University",
            "Langara College",
            "Douglas College"
        ],
    ]

    return (
        <>
            {sortingTypes.map(
                (variant: String, typeIndex: number) => (
                    <DropdownButton
                        as={ButtonGroup}
                        key={typeIndex}
                        id={`dropdown-variants-${variant}`}
                        variant={variant.toLowerCase()}
                        title={variant}
                    >
                       {sortingLists[typeIndex].map(
                            (elementInList: String, index: number) => (
                                <Dropdown.Item eventKey={index} 
                                onClick={() => {
                                    sortingOnClicksLocal[typeIndex](elementInList);
                                }}
                                >{elementInList}</Dropdown.Item>
                            )
                       )}
                    </DropdownButton>
                ),
            )}
        </>
    )
}

export default EventSortingBar