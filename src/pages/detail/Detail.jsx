import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { changeTodo, getTodo } from "../../api/axios";
import { setTodo } from "../../redux/modules/todo";

function Detail() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo);
  const [dueDate, setDueDate] = useState(new Date());

  const { data, isLoading, isError, refetch } = useQuery(
    "one",
    () => getTodo(params.id.replace(":", "")),
    {
      retry: 1,
    }
  );

  const { mutateAsync: changeTodoMutation } = useMutation(
    (id) => changeTodo(id, { ...todo, duedateAt: dueDate }),
    {
      onSuccess: () => {
        console.log("Todo 수정 성공");
      },
    }
  );

  const inputChangeHandler = ({ target }) => {
    const { name, value } = target;
    dispatch(setTodo({ name, value }));
    console.log(todo);
  };

  const dateChangeHandler = ({ target }) => {
    const Today = new Date();
    const setDay = new Date(target.value);
    if (Today > setDay) {
      return alert("날짜 설정이 잘 못 되었습니다");
    }
    setDueDate(new Date(target.value));
  };

  useEffect(() => {
    refetch();
  }, []);
  return isLoading ? (
    <div>Loading</div>
  ) : isError ? (
    <div>Error</div>
  ) : (
    <div
      style={{
        display: "flex",
        gap: "20px",
      }}
    >
      <div>
        <p>{data["nickname"]}</p>
        <p>{data["title"]}</p>
        <p>{data["content"]}</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <input
          onChange={inputChangeHandler}
          name="title"
          type="text"
          value={todo.title}
        ></input>
        <input
          onChange={inputChangeHandler}
          name="content"
          type="text"
          value={todo.content}
        ></input>
        <input
          onChange={dateChangeHandler}
          type="date"
          value={dueDate.toISOString().split("T")[0]}
        ></input>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Go Home
        </button>
        <button
          onClick={() => {
            changeTodoMutation(params.id.replace(":", ""));
          }}
        >
          수정하기
        </button>
      </div>
    </div>
  );
}

export default Detail;
