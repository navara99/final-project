import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { formatStartEndTime } from "../../helpers/date";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const Event = ({ event }) => {
  const { start, end, title, isInterview, asJobSeeker, fairId } = event;
  const LinkButton = () => {
    return isInterview ? (
      asJobSeeker ? (
        <Link to="/">
          <Button variant="contained" size="small">
            test button
          </Button>
        </Link>
      ) : (
        <Link to="/">
          <Button variant="contained" size="small">
            test button
          </Button>
        </Link>
      )
    ) : (
      <Link to={`/fairs/${fairId}`}>
        <Button variant="contained" size="small">
          Details
        </Button>
      </Link>
    );
  };

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
      theme="material"
      arrow={true}
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
