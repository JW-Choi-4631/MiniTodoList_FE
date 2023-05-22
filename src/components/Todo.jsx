import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const TodoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  height: 200px;
  border: 1px solid lightgrey;
  padding: 0 10px;
  border-radius: 5px;
`;

const TitleBox = styled.div`
  height: 12%;
  font-size: large;
  font-weight: bold;
  overflow: hidden;
`;

const ContentBox = styled.div`
  height: 50%;
  font-size: small;
  color: grey;
  overflow: auto;
`;

const DateBox = styled.div`
  height: 10%;
  font-size: smaller;
  color: grey;
`;

function Todo({ todo }) {
  const naviagte = useNavigate();

  const goToDetail = (id) => {
    naviagte(`/detail/:${id}`);
  };

  return (
    <TodoBox>
      <TitleBox>{todo["title"]}</TitleBox>
      <ContentBox>{todo["content"]}</ContentBox>
      <DateBox>{todo["updateAt"]}</DateBox>
      <div
        style={{
          width: "100%",
          height: "20px",
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "5px",
        }}
      >
        <button>삭제하기</button>
        <button>완료</button>
      </div>
      <button onClick={() => goToDetail(todo["todoId"])}>Go to Detail</button>
    </TodoBox>
  );
}

export default Todo;
