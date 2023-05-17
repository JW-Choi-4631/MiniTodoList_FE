import React from "react";
import { useQuery } from "react-query";
import { styled } from "styled-components";
import { getTodos } from "../../api/axios";
import Todo from "../../components/Todo";
import { useSelector, useDispatch } from "react-redux";
import { set, clear } from "../../redux/modules/userInfo";

const AppBox = styled.div`
  position: relative;
  max-width: 1200px;
  max-height: 100vh;
  margin: 0 auto;
  padding: 10px;
`;

const LoginBox = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 28px;
  border-radius: 5px;
  border: 1px solid lightgrey;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 28px;
  width: 60%;
  gap: 3px;
  border: 1px solid lightgrey;
  border-radius: 5px;
`;

const StyledBtn = styled.button`
  border: none;
  background-color: rgb(23, 206, 96);
  color: white;
  font-weight: bold;
  margin-top: 10px;
  border-radius: 5px;
  height: 30px;
`;

const NoBackBtn = styled.button`
  display: inline-block;
  border: none;
  width: 30%;
  font-size: 10px;
  font-weight: bolder;
  background-color: white;
  margin: 5px 0px 0px auto;
`;

const StyledInput = styled.input`
  height: 30px;
  margin-bottom: 0.3px;
  box-shadow: none;
  &:focus {
    outline: 2px solid rgb(23, 206, 96);
  }
`;

const StyledTextArea = styled.textarea`
  height: 30%;
  overflow: auto;
`;

const TodoBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  max-height: 100vh;
  gap: 2.5%;
  margin: 20px auto;
  overflow: auto;
`;

const StructureBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

function Home() {
  const { isLoading, isError, data } = useQuery("axios", getTodos);

  const userInfo = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();

  const setUserInfo = ({ target }) => {
    const { name, value } = target;
    dispatch(
      set({
        name,
        value,
      })
    );
  };

  const loginBtnClickHandler = () => {
    dispatch(clear());
  };

  const signUpBtnClickHandler = () => {
    alert("회원가입 페이지가 떠야 합니다.");
  };

  if (isLoading) {
    return <p>로딩중입니다...</p>;
  }
  if (isError) {
    return <p>오류가 발생하였습니다...</p>;
  }
  return (
    <AppBox>
      <StructureBox>
        <LoginBox>
          <StyledInput
            name="email"
            value={userInfo.email}
            onChange={setUserInfo}
            type="text"
            placeholder="아이디"
          />
          <StyledInput
            name="password"
            value={userInfo.password}
            onChange={setUserInfo}
            type="password"
            placeholder="비밀번호"
          />
          <NoBackBtn onClick={signUpBtnClickHandler}>회원가입</NoBackBtn>
          <StyledBtn onClick={loginBtnClickHandler}>로그인</StyledBtn>
        </LoginBox>
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
