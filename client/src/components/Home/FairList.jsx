import React from "react";
import FairListItem from "./FairListItem";

const objectIsEmpty = (obj) => {
  const numOfKey = Object.keys(obj).length;
  if (!numOfKey) return true;
  return false;
};

const FairList = ({ text, items, showDate }) => {
  const itemArr = items.map((item) => {
    return <FairListItem {...{ ...item, key: item.id, showDate }} />;
  });

  return (
    <>
      {!objectIsEmpty(items) && (
        <>
          <h2>{text}</h2>
          <div>{itemArr}</div>
        </>
      )}
    </>
  );
};

export default FairList;
