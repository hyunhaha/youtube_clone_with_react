import React, { useEffect, useState } from "react";

import styles from "./app.module.css";
import VideoList from "./components/video_list/video_list";
import Search from "./components/search/search";
import VideoDetail from "./components/video_detail/video_detail";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const onVideoClick = video => {
    setSelectedVideo(video);
  };
  const search = searchword => {
    youtube
      .search(searchword) //
      .then(items => {
        setVideos(items);
        setSelectedVideo(null);
      });
  };
  useEffect(() => {
    youtube
      .popular() //
      .then(items => setVideos(items));
  }, []);

  return (
    <div className={styles.app}>
      <Search onSearch={search} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={onVideoClick}
            display={selectedVideo ? "list" : "grid"}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
