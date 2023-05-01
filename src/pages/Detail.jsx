import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import Home from './Home'

function Detail() {

  const navigate = useNavigate();
  const cardList = useSelector(state=> state.Card);
  const params = useParams();
  const foundCard = cardList.find((card)=> {
    return card.id === params.id
  });

  return (
    <div>
      <h1>제목 : {foundCard.title}</h1>
      <p> 본문 : {foundCard.context}</p>
      <p> D-Day : {foundCard.date}</p>
      <button>수정하기</button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={()=>{
        navigate('/');
      }}>Go To Home</button>
    </div>
  )
}

export default Detail