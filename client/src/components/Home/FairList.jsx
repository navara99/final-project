import React from "react";
import FairListItem from "./FairListItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

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
          <div className="fair-list">{itemArr}</div>
        </>
      )}
    </>
  );
};

export default FairList;
