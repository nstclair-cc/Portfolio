
import React from "react";
import preloader from "../Assets/pre.svg";

function Pre(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      <img src={preloader} alt="loading" />
    </div>
  );
}

export default Pre;
