import Header from "./Header";
import { Outlet } from "react-router-dom";
import { useState, useEffect, useMemo, useCallback } from "react";
import { getVideos } from "../api/video";

/*
최적화 : 서비스의 성능을 개선하는 기술. 불필요하게 낭비되는 연산을 줄여 렌더링의 성능을 높이는 방법
리엑트에서 최적화는 '메모이제이션(Memoization)'
기법을 이용한다.
메모이제이션 : 말그대로 '메모하는 방법'

useMemo(콜백함수, []) : 특정 함수를 호출했을 때 그 함수의 반환 값을 기억해서 반환
useCallback : 리렌더링 될 때 작성된 함수를 다싱 생성하지 않도록 메모이제이션하는 훅
 - 쓰이는데는 함수
*/

const Layout = () => {
  const [videos, setVideos] = useState([]);
  const [page, setPage] = useState(1);

  const memoVideos = useMemo(() => videos, [videos]);

  const videoAPI = useCallback(async () => {
    const result = await getVideos();
    setVideos(result.data);
  });
};

// 비디오가 추가되는 경우
const onUpload = useCallback(() => {
  videoAPI();
}, [videoAPI]);

// 비디오가 추가되는 경우 ->

return();

export default Layout;
