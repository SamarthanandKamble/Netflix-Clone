import React from "react";
import BackgroundVideo from "./BackgroundVideo";
import BackgroundVideoInfo from "./BackgroundVideoInfo";

const PrimaryVideoList = ({ mainVideo }) => {
  return (
    <div className="">
      <BackgroundVideo mainVideo={mainVideo} />
      <BackgroundVideoInfo mainVideo={mainVideo} />
    </div>
  );
};

export default PrimaryVideoList;
