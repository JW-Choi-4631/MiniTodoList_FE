import React, { useEffect, useState } from "react";
import { clear, set } from "../redux/modules/userInfo";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginBox, StyledInput, NoBackBtn, StyledBtn } from "./styled/Styled";
import { useMutation } from "react-query";
import { login, getUserInfo, logout } from "../api/axios";
// import { useCookies } from "react-cookie";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginnedData, setLoginnedData] = useState({});
  const userInfo = useSelector((state) => state.userInfo);

  // const [cookies, setCookie, removeCookie] = useCookies();

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

  const loginMutation = useMutation(login, {
    onSuccess: () => {
      console.log("Login 되었습니다.");
      setIsLoggedIn(true);
      return getUserInfoMutation.mutate();
    },
  });

  const logoutMutation = useMutation(logout, {
    onSuccess: () => {
      console.log("Logout 되었습니다.");
      setIsLoggedIn(false);
    },
  });

  const getUserInfoMutation = useMutation(getUserInfo, {
    onSuccess: (data) => {
      setLoginnedData(data["userInfo"]);
      console.log("user정보를 성공적으로 가져왔습니다.");
      setIsLoggedIn(true);
    },
    onError: () => {
      alert("login이 필요합니다.");
    },
  });

  useEffect(() => {
    getUserInfoMutation.mutate();
  }, []);

  const loginBtnClickHandler = () => {
    dispatch(clear());
  };

  const signUpBtnClickHandler = () => {
    navigate("/signup");
  };

  return isLoggedIn ? (
    <LoginBox>
      <p>email : {loginnedData.email}</p>
      <p>nickname : {loginnedData.nickname}</p>
      <p>age : {loginnedData.age}</p>
      <button onClick={logoutMutation.mutate}>로그아웃</button>
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
          loginMutation.mutate({
            email: userInfo.email,
            password: userInfo.password,
          });
          loginBtnClickHandler();
        }}
      >
        로그인
      </StyledBtn>
    </LoginBox>
  );
}

export default Login;
