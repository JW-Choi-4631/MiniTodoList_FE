import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import CardOne from '../components/CardOne';
import GlobalStyle from '../components/GlobalStyle';

function Complete() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cardList = useSelector(state=> state.Card);

  const whenPageMovedInputValueClear = (page)=>{
    dispatch({
      type: 'clear',
      payLoad: {
        title: '',
        date: '',
        context: '',
      }
    })
    navigate(`${page}`);
  }

  const deleteBtnClickHandler = (id) => {
    dispatch({
      type: 'delete',
      payLoad: id,
    })
  };

  const changeIsDoneHandler = (id) => {
    dispatch({
      type : 'complete',
      payLoad : id,
    })
  }

  return (
    <>
    <GlobalStyle />
    <h1>Complete</h1>
    <div style={{
      display : 'flex',
      gap : 20,
    }}>
      {cardList.map((card)=>{
        if(card.isDone === true){
          return (
            <CardOne key = {card.id} deleteBtnClick = {deleteBtnClickHandler} changeBtnClick={changeIsDoneHandler} card={card}/>
            )
        }
        return null;
      })}
      </div>
      <button onClick={()=>{
        whenPageMovedInputValueClear('/');
      }}>이전으로</button>
    
    </>
    
  )
}

export default Complete