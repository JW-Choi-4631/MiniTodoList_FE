// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { set } from "../../redux/modules/userInfo";
// import { useMutation } from "react-query";
// import { signUp } from "../../api/axios";

// function SignUp() {
//   const userInfo = useSelector((state) => state.userInfo);
//   const dispatch = useDispatch();

//   const setUserInfo = ({ target }) => {
//     const { name, value } = target;
//     dispatch(
//       set({
//         name,
//         value,
//       })
//     );
//   };

//   const mutation = useMutation(signUp, {
//     onSuccess: () => {
//       console.log("Success");
//     },
//   });

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         width: "30%",
//       }}
//     >
//       <input name="email" onChange={setUserInfo} value={userInfo.email} />
//       <input name="password" onChange={setUserInfo} value={userInfo.password} />
//       <input name="nickname" onChange={setUserInfo} value={userInfo.nickname} />
//       <input name="age" onChange={setUserInfo} value={userInfo.age} />
//       <button
//         onClick={() => {
//           console.log(userInfo);
//           mutation.mutate(userInfo);
//         }}
//       >
//         회원가입
//       </button>
//     </div>
//   );
// }

// export default SignUp;

import { useDispatch, useSelector } from "react-redux";
import { set } from "../../redux/modules/userInfo";
import { useMutation } from "react-query";
import { signUp } from "../../api/axios";
import React from "react";
function SignUp({ isOpen, closeModal }) {
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
      closeModal();
    },
  });

  return (
    <div
      style={{
        display: isOpen ? "block" : "none",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.35)",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 500,
          maxWidth: "100%",
          maxHeight: "90%",
          overflowY: "auto",
          backgroundColor: "white",
        }}
      >
        <div>
          <h2>회원가입</h2>
          <div>
            <label>이메일</label>
            <br />
            <input
              name="email"
              onChange={setUserInfo}
              value={userInfo.email}
              placeholder="test@email.com"
            />
          </div>
          <div>
            <label>닉네임</label>
            <br />
            <input
              name="nickname"
              onChange={setUserInfo}
              value={userInfo.nickName}
              placeholder="두 글자 이상 닉네임"
            ></input>
          </div>
          <div>
            <label>나이</label>
            <br />
            <input
              name="age"
              onChange={setUserInfo}
              value={userInfo.age}
              placeholder="숫자만 입력해주세요"
            ></input>
          </div>
          <div>
            <label>비밀번호</label>
            <br />
            <input
              name="password"
              onChange={setUserInfo}
              value={userInfo.password}
              placeholder="비밀번호"
              type="password"
            ></input>
            <br />
            <input
              name="passwordConfirm"
              onChange={setUserInfo}
              value={userInfo.passwordConfirm}
              placeholder="비밀번호 확인"
              type="password"
            ></input>
            {/* {userInfo.password.length === 0 ? (
              ""
            ) : userInfo.passwordConfirm.length === 0 ? (
              ""
            ) : userInfo.passwordConfirm === userInfo.password ? (
              ""
            ) : (
              <p>위와 동일한 비밀번호를 입력하세요</p>
            )} */}
          </div>
        </div>
        <button
          onClick={() => {
            console.log(userInfo);
            mutation.mutate(userInfo);
          }}
        >
          회원가입
        </button>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
}
export default SignUp;
