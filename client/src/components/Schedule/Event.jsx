import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { formatTime } from "../../helpers/date";

const Event = ({ event }) => {
  const { start, end, title } = event;
  const formatStart = formatTime(start);
  const formatEnd = formatTime(end);
  return (
    <Tippy
      interactive={true}
      content={<>{title}
      <br />
      {formatStart} - {formatEnd}</>}
      placement="bottom"
      theme="material"
      arrow={true}
      interactiveDebounce={20}
      hideOnClick={false}
      maxWidth="350"
    >
      <div className="event">
        <strong>{event.title}</strong>
        {event.desc && ":  " + event.desc}
      </div>
    </Tippy>
  );
};

export default Event;
