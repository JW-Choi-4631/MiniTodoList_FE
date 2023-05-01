import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const CardBox = styled.div`
  display : flex;
  flex-direction: column;
  width :  15%;
  height : 150px;
  border : 1px black solid;
  border-radius : 10px;
  margin : 10px 0;
  background-color: white;
  opacity : 0.7;
  font-weight : Bold;
`

function CardOne({card}) {

  const title = card.title;
  const context = card.context;

  const navigate = useNavigate();

  const completeBtnContext = card.isDone? '취소':'완료';

  return (
    <CardBox>
      <h3>제목 : {title}</h3>
      <p> 본문 : {context}</p>
      <div style={{
        display : 'flex',
        margin: 'auto auto 0 auto',
        gap : 10,
      }}>
        <button>취소</button>
        <button>{completeBtnContext}</button>
        <button onClick={() => {
          navigate('/detail');
        }}>상세보기</button>
      </div>
      <div style={{
        width: '100%',
        margin: '0 auto',
        textAlign : 'center',
      }}>
        남은시간 : mm.dd
      </div>
    </CardBox>
  )
}

export default CardOne