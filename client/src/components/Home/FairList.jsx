import React from "react";
import FairListItem from "./FairListItem";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { fairListSettings, ongoingFairListSettings } from "../../constants";
import { objectIsEmpty } from "../../helpers/object"

const FairList = ({ text, items, showDate, isOngoing }) => {
  const itemArr = items.map((item) => {
    return <FairListItem {...{ ...item, key: item.id, showDate, isOngoing }} />;
  });
  const settings = isOngoing ? ongoingFairListSettings : fairListSettings;
  const classes = isOngoing ? "fair-list ongoing-fair-list" : "fair-list";
  return (
    <>
      {!objectIsEmpty(items) && (
        <>
          <h2>{text}</h2>
          <div className={classes}>
            <AliceCarousel items={itemArr} {...settings} />
          </div>
        </>
      )}
    </>
  );
};

export default FairList;
