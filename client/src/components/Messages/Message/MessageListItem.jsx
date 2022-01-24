import React, { useState } from "react";
import { Button } from "@mui/material";
import moment from "moment";
import axios from "axios";

const Messagediv = (props) => {
  const {
    id,
    message,
    created_at,
    sender_id,
    is_invitation,
    is_accepted,
    application_id,
    start_time,
    end_time,
  } = props.message;
  const [clicked, setClicked] = useState();
  const { currentUser, handleSubmit, setMessages, socket } = props;
  const appointment = {
    id,
    application_id,
    start_time,
    end_time,
    message,
    interviewer_id: sender_id,
  };

  const clickAcceptHandler = (e) => {
    axios
      .put("/api/messages/interview", { ...appointment, is_accepted: true })
      .then((res) => {
        const { data } = res;
        setMessages((prev) =>
          prev.map((msg) => {
            if (msg.id !== data.id) return msg;
            return data;
          })
        );
        socket.emit("editMessage", data);
        setClicked(true);
        handleSubmit(e, "Invitation is accepted.");
      });
  };

  const clickRejectHandler = (e) => {
    axios
      .put("/api/messages/interview", { ...appointment, is_accepted: false })
      .then((res) => {
        const { data } = res;
        setMessages((prev) =>
          prev.map((msg) => {
            if (msg.id !== data.id) return msg;
            return data;
          })
        );
        socket.emit("editMessage", data);
        setClicked(true);
        handleSubmit(e, "Invitation is rejected :(");
      });
  };

  return (
    <>
      {currentUser && (
        <div
          style={{
            justifyContent:
              sender_id === currentUser.id ? "flex-end" : "flex-start",
          }}
        >
          {is_invitation && sender_id !== currentUser.id ? (
            <div align="left">
              {message}
              <div style={{ marginTop: "0.7em" }}>
                <Button
                  disabled={is_accepted !== null || clicked}
                  variant="contained"
                  style={{ marginRight: "0.5em" }}
                  onClick={clickAcceptHandler}
                >
                  Accept
                </Button>
                <Button
                  variant="outlined"
                  disabled={is_accepted !== null || clicked}
                  onClick={clickRejectHandler}
                >
                  Reject
                </Button>
              </div>
            </div>
          ) : (
            <div align={sender_id === currentUser.id ? "right" : "left"}>
              {message}
            </div>
          )}
          <div align={sender_id === currentUser.id ? "right" : "left"}>
            {moment(`${created_at}`).fromNow()}
          </div>
        </div>
      )}
    </>
  );
};

export default Messagediv;
