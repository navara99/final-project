import React from "react";
import FairListItem from "./FairListItem";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import { sliderSettings } from "../../constants";

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
    <div>
      <h2> Single Item</h2>
      <Slider {...sliderSettings }>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
  // return (
  // <>
  //   {!objectIsEmpty(items) && (
  //     <>
  //       <h3>{text}</h3>
  //       <div className="fair-list">{itemArr}</div>
  //     </>
  //   )}
  // </>
  // );
};

export default FairList;
