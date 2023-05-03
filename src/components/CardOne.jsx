import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { hiddenStyle } from '../function/common'

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

function CardOne({deleteBtnClick, changeBtnClick, card}) {

  const {title, context, date, id} = card;

  const navigate = useNavigate();

  const completeBtnContext = card.isDone? '취소':'완료';

  return (
    <CardBox>
      <p>제목 : {title}</p>
      <p> 본문 : {context}</p>
      <div style={{
        display : 'flex',
        margin: 'auto auto 0 auto',
        gap : 10,
      }}>
        <button onClick={() => deleteBtnClick(id)}>삭제</button>
        <button onClick={() => changeBtnClick(id)}>{completeBtnContext}</button>
        <button style={hiddenStyle(card)} onClick={() => {
          navigate(`/detail/${id}`);
        }}>상세보기</button>
      </div>
      <div style={{
        width: '100%',
        margin: '0 auto',
        textAlign : 'center',
      }}>
        <span style={
          {...hiddenStyle(card),fontSize : 13}
        }>Due Date : {date}</span>
      </div>
    </CardBox>
  )
}

export default CardOne