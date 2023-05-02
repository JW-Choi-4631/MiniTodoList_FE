import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import CardOne from '../components/CardOne';
import GlobalStyle from '../components/GlobalStyle';

function Detail() {

  const navigate = useNavigate();
  const cardList = useSelector(state => state.Card);
  const Context = useSelector(state => state.SaveContext);
  const dispatch = useDispatch();
  const params = useParams();
  const foundCard = cardList.find((card) => {
    return card.id === params.id
  });

  const contextChangeHandler = (event) => {
    let inputname = event.target.name;
    switch (inputname) {
      case 'titleInput':
        dispatch({
          type: 'title',
          payLoad: event.target.value,
        })
        break;
      case 'contextInput':
        dispatch({
          type: 'context',
          payLoad: event.target.value,
        })
        break;
      case 'dateInput':
        dispatch({
          type: 'date',
          payLoad: event.target.value,
        })
        break;
    }
  };

  const changeBtnClickHandler = () => {
    dispatch({
      type: 'change',
      payLoad: {
        id: params.id,
        title: Context.title,
        context: Context.context,
        date: Context.date,
        isDone: false,
      }
    })
    dispatch({
      type: 'clear',
      payLoad: {
        title: '',
        date: '',
        context: '',
      }
    })

    navigate('/');
  }


  return (
    <>
    <GlobalStyle />
    <div>
      <div>

      </div>
      <div>
        제목 : <input name='titleInput' type='text' onChange={contextChangeHandler} placeholder={foundCard.title} />
        <br />
        본문 : <textarea name='contextInput' type='text' onChange={contextChangeHandler} placeholder={foundCard.context} />
        <br />
        <input name='dateInput' type='date' onChange={contextChangeHandler} />
        <p> D-Day : {foundCard.date}</p>
        <button onClick={changeBtnClickHandler}>수정하기</button>
        &nbsp;&nbsp;&nbsp;
        <button onClick={() => {
          navigate('/');
        }}>Go To Home</button>
      </div>
    </div>
    </>
  )
}

export default Detail