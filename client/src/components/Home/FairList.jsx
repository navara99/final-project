import React from "react";
import FairListItem from "./FairListItem";

const objectIsEmpty = (obj) => {
  const numOfKey = Object.keys(obj).length;
  if (!numOfKey) return true;
  return false;
};

const FairList = ({ text, items }) => {
  const itemArr = items.map((item) => {
    return <FairListItem {...{ ...item, key: item.id }} />;
  });
  return (
    <>
      {!objectIsEmpty(items) && (
        <>
          <h3>{text}</h3>
          <div className="fair-list">{itemArr}</div>
        </>
      )}
    </>
  );
};

export default FairList;
