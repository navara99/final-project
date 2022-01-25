import React from "react";
import Columns from "./Columns";
import { useState } from "react";

function Bookmarks() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <Columns {...{ selectedIndex, setSelectedIndex }} />
    </>
  )
};

export default Bookmarks;