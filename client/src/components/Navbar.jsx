import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  return (
    <div className="navbar">
      <FontAwesomeIcon icon={faCoffee} />
    </div>
  );
}
