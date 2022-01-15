import React from "react";
import FairListItem from "./FairListItem";

const objectIsEmpty = (obj) => {
  const numOfKey = Object.keys(obj).length;
  if (!numOfKey) return true;
  return false;
};

const FairList = ({ text, items }) => {
  console.log(items);
  return (
    <>
      {!objectIsEmpty(items) && (
        <>
          <h3>{text}</h3>
          <div className="fair-list">
            <FairListItem />
            <FairListItem />
            <FairListItem />
            <FairListItem />
            <FairListItem />
          </div>
        </>
      )}
    </>
  );
};

export default FairList;
