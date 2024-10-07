import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { videoCode } = useParams();
  const [video, setVideo] = useState({
    videoCode: 0,
    videoUrl: "",
    videoImg: "",
    videoTitle: "",
    videoCount: "",
    videoDate: "",
    videoDesc: "",
  });

  const videoAPI = async () => {
    const response = await getVideo(videoCode);
    setVideo(response.data);
  };

  useEffect(() => {
    videoAPI();
  }, []);
};

return (
  <main className="detail">
    <div className="video-detail">
      <video controls src={video?.videoUrl}></video>
      <h2>{video?.videoTitle}</h2>
      <div className="video-detail-desc">
        <div className="detail-desc-left">
          <img src={video?.channel.channelImg} />
          <div>
            <h3></h3>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  </main>
);
