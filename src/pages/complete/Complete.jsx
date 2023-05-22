import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { getCompleteTodos } from "../../api/axios";
import { TodoBox } from "../../components/styled/Styled";
import { queryClient } from "../../App";
import { deleteTodo, completeTodo } from "../../api/axios";
import { useMutation } from "react-query";
import Todo from "../../components/Todo";
import { useNavigate } from "react-router-dom";

function Complete() {
  const navigate = useNavigate();
  const {
    data: completeList,
    isLoading,
    isError,
    refetch,
    error,
  } = useQuery("completeList", getCompleteTodos, {
    retry: 1,
  });
  const { mutateAsync: deleteTodoMutation } = useMutation(
    (id) => deleteTodo(id),
    {
      onSuccess: () => {
        console.log("삭제 성공");
        refetch();
      },
    }
  );

  const { mutateAsync: completeTodoMutation } = useMutation(
    (id) => completeTodo(id),
    {
      onSuccess: () => {
        console.log("완료 성공");
        refetch();
      },
    }
  );

  useEffect(() => {
    refetch();
  }, []);
  return (
    <div>
      <TodoBox>
        {isLoading ? (
          <div>로딩중....</div>
        ) : isError ? (
          <>
            <div>{error.response.data.message}</div>
          </>
        ) : completeList ? (
          completeList.map((item) => (
            <Todo
              key={item["todoId"]}
              todo={item}
              deleteTodoMutation={deleteTodoMutation}
              completeTodoMutation={completeTodoMutation}
            />
          ))
        ) : (
          <div>todoList가 존재하지 않습니다.</div>
        )}
      </TodoBox>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go Home
      </button>
    </div>
  );
}

export default Complete;
