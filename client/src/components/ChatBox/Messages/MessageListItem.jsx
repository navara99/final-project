import React, { useState } from "react";
import { ListItem, Grid, ListItemText, Button } from "@mui/material";
import moment from "moment";
import axios from "axios";

const MessageListItem = (props) => {
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
        console.log(data);
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
        console.log(data);
        socket.emit("editMessage", data);
        setClicked(true);
        handleSubmit(e, "Invitation is rejected :(");
      });
  };

  return (
    <>
      {currentUser && (
        <ListItem
          style={{
            justifyContent:
              sender_id === currentUser.id ? "flex-end" : "flex-start",
          }}
        >
          <Grid container>
            <Grid item xs={12}>
              {is_invitation && sender_id !== currentUser.id ? (
                <ListItemText
                  align="left"
                  primary={
                    <>
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
                    </>
                  }
                ></ListItemText>
              ) : (
                <ListItemText
                  align={sender_id === currentUser.id ? "right" : "left"}
                  primary={message}
                ></ListItemText>
              )}
            </Grid>
            <Grid item xs={12}>
              <ListItemText
                align={sender_id === currentUser.id ? "right" : "left"}
                secondary={moment(`${created_at}`).fromNow()}
              ></ListItemText>
            </Grid>
          </Grid>
        </ListItem>
      )}
    </>
  );
};

export default MessageListItem;
