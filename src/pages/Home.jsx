import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import GlobalStyle from "../components/GlobalStyle";
import "../App.css";
import { useNavigate } from "react-router-dom";
import CardOne from "../components/CardOne";
import { Container } from "../duplications/common";
import { save, erase, complete } from "../redux/modules/Card";
import { title, context, clear, date } from "../redux/modules/Content";
import { useEffect } from "react";

function Home() {
  const cards = useSelector((state) => {
    return state.Card;
  });

  // Redux로 state 생성
  const Content = useSelector((state) => {
    return state.Content;
  });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const contentChangeHandler = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case "title":
        dispatch(title(value));
        break;
      case "context":
        dispatch(context(value));
        break;
      case "date":
        dispatch(date(value));
        break;
      default:
        break;
    }
  };

  const saveBtnClickHandler = () => {
    dispatch(save(Content));
    dispatch(clear());
  };

  // Complete Page와 중복되는 함수
  const BtnClickHandler = (event, payLoad) => {
    const sendType =
      event.target.name === "deleteBtn" ? erase(payLoad) : complete(payLoad);
    dispatch(sendType);
    if (event.target.name === "completeBtn") {
      navigate("/complete");
    }
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(cards));
  }, [cards]);

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <div className="save-Box">
          <InputContainer className="inputTitle">
            <label>제목</label>
            <input
              name="title"
              onChange={contentChangeHandler}
              value={Content.title}
              maxLength={15}
              type="text"
              placeholder="제목을 입력하세요.(최대 15자)"
            />
            <label>기한 날짜</label>
            <input
              name="date"
              onChange={contentChangeHandler}
              value={Content.date}
              type="date"
            />
          </InputContainer>
          <InputContainer className="inputContext">
            <label>상세 내역</label>
            <textarea
              name="context"
              onChange={contentChangeHandler}
              value={Content.context}
              cols={30}
              rows={4}
              type="text"
              placeholder="내용을 입력하세요."
            />
          </InputContainer>
          <InputContainer className="buttonBox">
            <button onClick={saveBtnClickHandler}> 저장하기 </button>
          </InputContainer>
        </div>
        <div className="Card-List">
          <button
            style={{
              color: "red",
            }}
          >
            🕐 해야할 일
          </button>
          <button
            onClick={() => {
              navigate("/complete");
            }}
          >
            🎉완료 List
          </button>
          <Container>
            {cards.map((card) => {
              if (card.isDone === false) {
                return (
                  <CardOne
                    BtnClick={BtnClickHandler}
                    key={card.id}
                    card={card}
                  />
                );
              }
              return null;
            })}
          </Container>
        </div>
      </div>
    </>
  );
}

export default Home;

const InputContainer = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;
`;
