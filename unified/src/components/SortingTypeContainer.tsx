// Creates a type to sort list from

import List from "@mui/material/List";
import React, { FunctionComponent } from "react"

interface SortingTypeContainerProps {
  sortingType: String;
  sortingList: any[];
  onSortClicked: () => void;
}

const SortingTypeContainer: FunctionComponent<SortingTypeContainerProps> = ({
  sortingType,
  sortingList,
  onSortClicked,
}) => {
  return (
    <>
      <List>
      </List>
    </>
  );


}

export default SortingTypeContainer