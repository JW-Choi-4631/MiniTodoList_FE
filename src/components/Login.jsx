import { clear, set } from "../redux/modules/userInfo";
import { useDispatch, useSelector } from "react-redux";
import { LoginBox, StyledInput, NoBackBtn, StyledBtn } from "./styled/Styled";
import { useState } from "react";
import SignUp from "../pages/signup/SignUp";

function Login({
  isLoggedIn,
  logout,
  login,
  userInformation,
  loading,
  isError,
}) {
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.userInfo);
  const [isOpen, setIsOpen] = useState(false);

  const setUserInfo = ({ target }) => {
    const { name, value } = target;
    dispatch(set({ name, value }));
  };

  const loginBtnClickHandler = () => {
    dispatch(clear());
  };

  const signUpBtnClickHandler = () => {
    setIsOpen(true);
  };

  const closeModalHandelr = () => {
    setIsOpen(false);
  };

  return isLoggedIn && !loading && !isError ? (
    <LoginBox>
      <p>email : {userInformation["email"]}</p>
      <p>nickname : {userInformation["nickname"]}</p>
      <p>age : {userInformation["age"]}</p>
      <button onClick={logout.mutate}>로그아웃</button>
    </LoginBox>
  ) : (
    <LoginBox>
      <SignUp isOpen={isOpen} closeModal={closeModalHandelr} />
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
          login.mutate({
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
