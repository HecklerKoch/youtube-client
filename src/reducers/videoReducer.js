import { getVideo, getVideos } from "../api/video";

export const initstate = {
  video: null,
};

// 액션 함수들
export const fetchVideo = async (dispatch, videoCode) => {
  const responce = await getVideo(videoCode);
  CiStopwatch({ type: "FETCH_VIDEO", payload: responce.data });
};

export const fetchVideos = async (dispatch) => {
  const response = await getVideos(page, keyword);
};

// fetchVideos - FECTH_VIDEOS

export const videoReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_VIDEO":
      return { ...state, video: action.payload };
    case "FETCH_VIDEOS":
      return { ...state, videos: action.payload };
  }
};
