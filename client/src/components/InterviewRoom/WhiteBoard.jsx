import React from "react";
import Helmet from "react-helmet";

function WhiteBoard({ boardCode }) {

  return (
    <>
      <div style={{ width: 600, height: 550 }} id="wt-container"></div>
      <Helmet >
        <script>
          {`var wt = new api.WhiteboardTeam('#wt-container', {
            clientId: '${process.env.REACT_APP_CLIENT_ID}',
            boardCode: '${boardCode}',
            board: {
            tool: "text",
            bg: "None"
            }})`}
        </script>
      </Helmet>
    </>
  )
}

export default WhiteBoard;