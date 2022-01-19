import React from "react";

function Resume({ resume }) {

  console.log(resume);

  return (
    <>
      <embed src={"http://localhost:8080/" + resume + "#toolbar=0"}  width="100%" height="80%"/>
    </>
  )

}

export default Resume;