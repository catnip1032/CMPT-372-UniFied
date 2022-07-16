import EventSortingBar from "./EventSortingBar"
import EventCardList from "./EventCardList"
import { useState } from "react"


const EventScaffold = () => {
    const [daySorting , setDaySorting] = useState("Whenever")
    const [typeSorting , setTypeSorting] = useState("Any")
    const [distanceSorting , setDistanceSorting] = useState("Whereever")
    const [categorySorting , setCategorySorting] = useState("Any")
    const [universitySorting , setUniversitySorting] = useState("Any")

    const sortingBarOnClicks = [
        (sortType: any) => { 
            setDaySorting(sortType); 
        },
        (sortType: any) => {
            setTypeSorting(sortType); 
        },
        (sortType: any) => {
            setDistanceSorting(sortType);
        },
        (sortType: any) => {
            setCategorySorting(sortType);
        },
        (sortType: any) => {
            setUniversitySorting(sortType); 
        },
    ]

    const eventCardListSortingProps = [
        daySorting,
        typeSorting,
        distanceSorting,
        categorySorting,
        universitySorting
    ]

    return (
        <>
            <EventSortingBar sortingOnClicks={sortingBarOnClicks}></EventSortingBar>
            <EventCardList sortingCombinations={eventCardListSortingProps}></EventCardList>
        </>
    )

} 

export default EventScaffold