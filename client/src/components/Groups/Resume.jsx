import React from "react";

function Resume({ resume }) {

  console.log(resume);

  return (
    <>
      <embed src={resume} width="800px" height="2100px" />
    </>
  )

}

export default Resume;