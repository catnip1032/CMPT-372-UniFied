// A list that holds event cards
import React from "react"

interface EventCardListProps {
    sortingCombinations: any[]
}


const EventCardList = (eventCardListProps: EventCardListProps) => {

    function getAllEvents() {
        return []
    }

    function populateListBasedOnSortingCombination() {
        const allEvents = getAllEvents()

        return (
            <></>
        )
    }

    return (
        <></>
    )
}

export default EventCardList