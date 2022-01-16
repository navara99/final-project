import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const Event = ({ event }) => {
  return (
    <Tippy
      interactive={true}
      content="testing"
      placement="top"
      theme="material"
      arrow={true}
      interactiveDebounce={75}
    >
      <div>
        <strong>{event.title}</strong>
        {event.desc && ":  " + event.desc}
      </div>
    </Tippy>
  );
};

export default Event;
