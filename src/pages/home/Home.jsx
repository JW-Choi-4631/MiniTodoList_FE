import React from "react";
import { useQuery } from "react-query";
import { getTodos } from "../../api/axios";
import Todo from "../../components/Todo";
import Login from "../../components/Login";
import {
  AppBox,
  StructureBox,
  StyledInput,
  StyledBtn,
  ContentBox,
  StyledTextArea,
  TodoBox,
} from "../../components/styled/Styled";

function Home() {
  const { isLoading, isError, data } = useQuery("axios", getTodos);

  if (isLoading) {
    return <p>로딩중입니다...</p>;
  }
  if (isError) {
    return <p>오류가 발생하였습니다...</p>;
  }
  return (
    <AppBox>
      <StructureBox>
        <Login />
        <ContentBox>
          <StyledInput placeholder="제목을 입력하세요." />
          <StyledInput type="date" />
          <StyledTextArea placeholder="내용을 입력하세요." />
          <StyledBtn>저장하기</StyledBtn>
        </ContentBox>
      </StructureBox>

      <TodoBox>
        {data
          .filter((item) => item.isDone === false)
          .map((item) => (
            <Todo key={item.id} todo={item} />
          ))}
      </TodoBox>
    </AppBox>
  );
}

export default Home;
