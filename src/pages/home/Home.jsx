import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todo from "../../components/Todo";
import Login from "../../components/Login";
import { setTodo } from "../../redux/modules/todo";
import {
  AppBox,
  StructureBox,
  StyledInput,
  StyledBtn,
  ContentBox,
  StyledTextArea,
  TodoBox,
} from "../../components/styled/Styled";
import { useMutation, useQuery } from "react-query";
import { postTodo, getTodos } from "../../api/axios";
import { queryClient } from "../../App";
import { useState } from "react";
import { login, logout, getUserInfo } from "../../api/axios";
import { clearTodo } from "../../redux/modules/todo";

function Home() {
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  // const [loginnedData, setLoginnedData] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // todoList Read
  const {
    data: todoList,
    isLoading: isTodoListLoading,
    isError: isTodoListError,
  } = useQuery(["todoList"], getTodos, {
    enabled: isLoggedIn,
    retry: 1,
  });

  const {
    data: userInformation,
    isLoading: isUserInfoLoading,
    isError: isUserInfoError,
  } = useQuery(["userInfo"], getUserInfo, {
    enabled: isLoggedIn,
    retry: 1,
  });

  // 로그인 관련 react query CUD(Create, Update, Delete)
  const loginMutation = useMutation(login, {
    onSuccess: async () => {
      console.log("Login 되었습니다.");
      setIsLoggedIn(true);
      await queryClient.invalidateQueries("todoList");
      await queryClient.invalidateQueries("userInfo");
      // getUserInfoMutation.mutate();
    },
  });

  const logoutMutation = useMutation(logout, {
    onSuccess: () => {
      console.log("Logout 되었습니다.");
      document.cookie =
        "authorization=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; // 쿠키 만료 시간 조정하여 해당 쿠키네임(authorization)의 값 삭제
      setIsLoggedIn(false);
    },
  });

  // const getUserInfoMutation = useMutation(getUserInfo, {
  //   onSuccess: (data) => {
  //     setLoginnedData(data);
  //     console.log("user정보를 성공적으로 가져왔습니다.");
  //   },
  //   onError: () => {
  //     alert("login이 필요합니다.");
  //   },
  // });

  const postTodoMutation = useMutation(postTodo, {
    onSuccess: () => {
      console.log("post 성공");
      dispatch(clearTodo());
      queryClient.invalidateQueries("todoList");
    },
  });

  const todoInputChangeHandler = ({ target }) => {
    const { name, value } = target;
    dispatch(
      setTodo({
        name,
        value,
      })
    );
  };

  useEffect(() => {
    if (document.cookie.split("=")[1]) {
      setIsLoggedIn(true);
    }
    queryClient.invalidateQueries("userInfo");
    queryClient.invalidateQueries("todoList");
  }, [isLoggedIn]);

  return (
    <AppBox>
      <StructureBox>
        <Login
          login={loginMutation}
          logout={logoutMutation}
          isLoggedIn={isLoggedIn}
          // loginnedData={loginnedData}
          userInformation={userInformation}
          loading={isUserInfoLoading}
          Error={isUserInfoError}
        />
        <ContentBox>
          <StyledInput
            name="title"
            onChange={todoInputChangeHandler}
            value={todo.title}
            placeholder="제목을 입력하세요."
          />
          <StyledInput
            name="date"
            onChange={todoInputChangeHandler}
            value={todo.date}
            type="date"
          />
          <StyledTextArea
            name="content"
            onChange={todoInputChangeHandler}
            value={todo.content}
            placeholder="내용을 입력하세요."
          />
          <StyledBtn
            onClick={() => {
              postTodoMutation.mutate(todo);
            }}
          >
            저장하기
          </StyledBtn>
        </ContentBox>
      </StructureBox>

      <TodoBox>
        {isTodoListLoading ? (
          <div>로딩중....</div>
        ) : isTodoListError ? (
          <div>로딩중 에러가 발생했습니다.</div>
        ) : document.cookie.split("=")[1] === "" || document.cookie === "" ? (
          <div>로그인이 필요합니다.</div>
        ) : todoList ? (
          todoList
            .filter((item) => item["done"] === false)
            .map((item) => <Todo key={item["todoId"]} todo={item} />)
        ) : (
          <div>todoList가 존재하지 않습니다.</div>
        )}
      </TodoBox>
    </AppBox>
  );
}

export default Home;
