import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useQuery } from "react-query";
// import { getTodos } from "../../api/axios";
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
import { useMutation } from "react-query";
import { postTodo, getTodos } from "../../api/axios";

function Home() {
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const todoInputChangeHandler = ({ target }) => {
    const { name, value } = target;
    dispatch(
      setTodo({
        name,
        value,
      })
    );
  };

  const postTodoMutation = useMutation(postTodo, {
    onSuccess: () => {
      console.log("post 성공");
      // get에 대한 invalidquery 추가 필요
    },
  });

  // const getTodoListMutation = useMutation(getTodos, {
  //   onSuccess: (data) => {
  //     console.log("TodoList Get 성공");
  //     return data;
  //   },
  //   onError: () => {
  //     console.log("TodoList Get 실패");
  //   },
  // });

  return (
    <AppBox>
      <StructureBox>
        <Login />
        <ContentBox>
          <StyledInput
            name="title"
            onChange={todoInputChangeHandler}
            placeholder="제목을 입력하세요."
          />
          <StyledInput type="date" />
          <StyledTextArea
            name="content"
            onChange={todoInputChangeHandler}
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
        {/* {data
          .filter((item) => item.isDone === false)
          .map((item) => (
            <Todo key={item.id} todo={item} />
          ))} */}
        {/* {todoList
          .filter((item) => item.isDone === false)
          .map((item) => (
            <Todo key={item.id} todo={item} />
          ))} */}
      </TodoBox>
    </AppBox>
  );
}

export default Home;
