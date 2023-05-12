import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CardOne from "../components/CardOne";
import GlobalStyle from "../components/GlobalStyle";
import { Container } from "../duplications/common";
import { complete, erase } from "../redux/modules/Card";
import { clear } from "../redux/modules/Content";
import { useEffect } from "react";

function Complete() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cards = useSelector((state) => state.Card);

  // Detail과 중복함수
  const whenPageMovedInputValueClear = (page) => {
    dispatch(clear());
    navigate(`${page}`);
  };
  // Home 중복함수
  const BtnClickHandler = (event, id) => {
    const sendType =
      event.target.name === "deleteBtn" ? erase(id) : complete(id);
    dispatch(sendType);
    if (event.target.name === "completeBtn") {
      navigate("/");
    }
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(cards));
  }, [cards]);

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <div className="Card-List">
          <button
            onClick={() => {
              whenPageMovedInputValueClear("/");
            }}
          >
            🕐 해야할 일
          </button>
          <button
            style={{
              color: "red",
            }}
          >
            🎉완료 List
          </button>
          <Container>
            {cards.map((card) => {
              if (card.isDone === true) {
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

export default Complete;
