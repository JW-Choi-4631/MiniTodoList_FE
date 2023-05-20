import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { set } from "../../redux/modules/userInfo";
import { useMutation } from "react-query";
import { signUp } from "../../api/axios";

function SignUp() {
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

  const mutation = useMutation(signUp, {
    onSuccess: () => {
      console.log("Success");
    },
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "30%",
      }}
    >
      <input name="email" onChange={setUserInfo} value={userInfo.email} />
      <input name="password" onChange={setUserInfo} value={userInfo.password} />
      <input name="nickname" onChange={setUserInfo} value={userInfo.nickname} />
      <input name="age" onChange={setUserInfo} value={userInfo.age} />
      <button
        onClick={() => {
          console.log(userInfo);
          mutation.mutate(userInfo);
        }}
      >
        회원가입
      </button>
    </div>
  );
}

export default SignUp;
