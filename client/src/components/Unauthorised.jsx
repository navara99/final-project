import React from "react";

const Unauthorised = ({ action, Link }) => {
  return (
    <div className="unauthorised">
      <h2>Not Authorised</h2>
      <Link />
      &nbsp;before you can {action}.
    </div>
  );
};

export default Unauthorised;
