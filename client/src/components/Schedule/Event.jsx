import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const Event = ({ event }) => {
  return (
    <Tippy
      interactive={true}
      content={event.title}
      placement="top"
      theme="material"
      arrow={true}
      interactiveDebounce={20}
      hideOnClick={false}
    >
      <div className="event">
        <strong>{event.title}</strong>
        {event.desc && ":  " + event.desc}
      </div>
    </Tippy>
  );
};

export default Event;
