import React, { useState } from "react";
import { clear, set } from "../redux/modules/userInfo";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginBox, StyledInput, NoBackBtn, StyledBtn } from "./styled/Styled";
import { useMutation } from "react-query";
import { login } from "../api/axios";
import { useCookies } from "react-cookie";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userInfo = useSelector((state) => state.userInfo);

  const [cookies, setCookie, removeCookie] = useCookies();

  const setUserInfo = ({ target }) => {
    const { name, value } = target;
    dispatch(
      set({
        name,
        value,
      })
    );
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const mutation = useMutation(login, {
    onSuccess: (data) => {
      setCookie("accessToken", data["accessToken"], { path: "/" });
      console.log("Login 되었습니다.");
      setIsLoggedIn(true);
    },
  });

  const loginBtnClickHandler = () => {
    dispatch(clear());
  };

  const signUpBtnClickHandler = () => {
    navigate("/signup");
  };

  return isLoggedIn ? (
    <LoginBox>
      <p>Login</p>
    </LoginBox>
  ) : (
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
      <StyledBtn
        onClick={() => {
          mutation.mutate(userInfo);
          loginBtnClickHandler();
        }}
      >
        로그인
      </StyledBtn>
    </LoginBox>
  );
}

export default Login;
