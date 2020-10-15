import React from "react";
import VideoItem from "./video_item";

const VideoList = props => {
  return (
    <ul>
      {props.videos.map(video => (
        <VideoItem video={video} />
      ))}
    </ul>
  );
};

export default VideoList;
