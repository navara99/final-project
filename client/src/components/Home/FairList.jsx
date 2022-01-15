import React from "react";
import FairListItem from "./FairListItem";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { fairListSettings } from "../../constants";

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
          <div className="fair-list">
            <AliceCarousel
              items={itemArr}
              {...fairListSettings}
            />
          </div>
        </>
      )}
    </>
  );
};

export default FairList;
