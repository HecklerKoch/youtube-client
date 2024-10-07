import { useState, useReducer } from "react";
import styled from "styled-components";
import { countReducer, initstate } from "../reducers/countReducer";

const StyledDiv = styled.div`
  margin: 20px;

  h1 {
    font-size: 4rem;
    font-weight: bold;
  }
  button {
    margin: 10px;
    padding: 5px 30px;
    font-size: 3rem;
    background-color: black;
    color: white;
    border-radius: 5px;
  }
`;

// 1. 초기 상태
const initstate = {
  count: 0,
};

// 2. 리듀서 함수
//    상태(state)와 액션(action)을 받아 상태들을 업데이트하는 역할
//    - state : 현재 상태
//    - action : 상태를 어떻게 변경할지 정의한 객체, 주로 type으로 구분
//               switch문을 사용하여, action의 type에 따라 상태를 다르게 처리
const countReducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return { count: state.count + 1 };
    case "DECREASE":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Count = () => {
  // 3. useReducer(리듀서 함수, 초기 상태) 훅을 사용하여 상태(state)와 디스패치(dispatch)를 관리
  //    - dispatch : 액션을 리듀서로 보내는 함수로, 액션 객체를 인자로 받는다.

  const [state, dispatch] = useReducer(countReducer, initstate);

  return (
    <StyledDiv>
      <h1>Count : {state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREASE" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREASE" })}>-</button>
    </StyledDiv>
  );
};
export default Count;
