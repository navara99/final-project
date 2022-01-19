import React from "react";

function Resume({ resume }) {

  console.log(resume);

  return (
    <>
      <embed src={"http://localhost:8080/" + resume} width="800px" height="2100px" />
    </>
  )

}

export default Resume;