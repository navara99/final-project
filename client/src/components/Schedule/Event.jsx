import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { formatStartEndTime } from "../../helpers/date";
import { Link } from "react-router-dom";

const Event = ({ event }) => {
  const { start, end, title } = event;
  const time = formatStartEndTime(start, end);
  const content = (
    <>
      {title}
      <br />
      {time}
      <br />
      <Link to="/">
        <button>test button</button>
      </Link>
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
      appendTo={document.body}
    >
      <div className="event">
        <strong>{title}</strong>
      </div>
    </Tippy>
  );
};

export default Event;
