import { clear, set } from "../redux/modules/userInfo";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginBox, StyledInput, NoBackBtn, StyledBtn } from "./styled/Styled";

function Login({ isLoggedIn, logout, login, userInformation, loading }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userInfo = useSelector((state) => state.userInfo);

  const setUserInfo = ({ target }) => {
    const { name, value } = target;
    dispatch(set({ name, value }));
  };

  const loginBtnClickHandler = () => {
    dispatch(clear());
  };

  const signUpBtnClickHandler = () => {
    navigate("/signup");
  };

  return isLoggedIn && !loading ? (
    <LoginBox>
      <p>email : {userInformation["email"]}</p>
      <p>nickname : {userInformation["nickname"]}</p>
      <p>age : {userInformation["age"]}</p>
      <button onClick={logout.mutate}>로그아웃</button>
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
