import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { formatStartEndTime } from "../../helpers/date";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "tippy.js/themes/light-border.css"
import "tippy.js/themes/translucent.css"

const Event = ({ event }) => {
  const { start, end, title, isInterview, fairId, interviewId } = event;
  const LinkButton = () => {
    return isInterview ? (
      <Link to={`/interviews/${interviewId}`}>
        <Button variant="contained" size="small">
          Interview
        </Button>
      </Link>
    )
      : (
        <Link to={`/fairs/${fairId}`}>
          <Button variant="contained" size="small">
            Details
          </Button>
        </Link>
      );
  };

  const theme = isInterview ? "light-border" : "translucent";

  const time = formatStartEndTime(start, end);
  const content = (
    <>
      <h3>{title}</h3>
      <div className="event-tooltips">
        {time}
        <LinkButton />
      </div>
    </>
  );
  return (
    <Tippy
      interactive={true}
      content={content}
      placement="bottom"
      theme={theme}
      arrow={true}
      maxWidth={250}
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
