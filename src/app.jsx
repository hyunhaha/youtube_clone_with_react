import React, { useEffect, useState } from "react";

import "./app.css";
import VideoList from "./components/video_list";
import Search from "./components/search";

function App(props) {
  const [videos, setVideos] = useState([]);
  const search = searchword => {
    props.youtube
      .search(searchword) //
      .then(items => setVideos(items));
  };
  useEffect(() => {
    props.youtube
      .popular() //
      .then(items => setVideos(items));
  }, []);

  return (
    <>
      <Search onSearch={search} />
      <VideoList videos={videos} />
    </>
  );
}

export default App;
