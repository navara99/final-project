import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const Event = ({ event }) => {
  return (
    <Tippy content="testing" placement="top" theme="material" arrow={true}>
      <div style={{width: "100%"}}>
        <strong>{event.title}</strong>
        {event.desc && ":  " + event.desc}
      </div>
    </Tippy>
  );
};

export default Event;
