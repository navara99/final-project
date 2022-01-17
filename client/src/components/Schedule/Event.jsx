import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { formatStartEndTime } from "../../helpers/date";

const Event = ({ event }) => {
  const { start, end, title } = event;
  const time = formatStartEndTime(start, end);
  const content = (
    <>
      {title}
      <br />
      {time}
    </>
  );
  return (
    <Tippy
      interactive={true}
      content={content}
      placement="bottom"
      theme="material"
      arrow={true}
      interactiveDebounce={20}
      hideOnClick={false}
      maxWidth={100}
    >
      <div className="event">
        <strong>{event.title}</strong>
        {event.desc && ":  " + event.desc}
      </div>
    </Tippy>
  );
};

export default Event;
