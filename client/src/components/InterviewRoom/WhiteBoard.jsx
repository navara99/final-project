import React from "react";
import Helmet from "react-helmet";

function WhiteBoard() {

  return (
    <>
      <div style={{ width: 600, height: 550 }} id="wt-container"></div>
      <Helmet async={false}>
        <script>
          {`var wt = new api.WhiteboardTeam('#wt-container', {
      clientId: '${process.env.REACT_APP_CLIENT_ID}',
      boardCode: 'tharsikantharsikan',
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