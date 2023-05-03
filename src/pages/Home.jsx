import { useSelector, useDispatch } from 'react-redux'
import styled from "styled-components";
import GlobalStyle from "../components/GlobalStyle"
import '../App.css'
import { useNavigate } from 'react-router-dom';
import CardOne from '../components/CardOne';
import { Container } from '../duplications/common'

const InputContainer = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;
`

function Home() {

  const card = useSelector((state) => {
    return state.Card;
  });

  // Redux로 state 생성
  const Content = useSelector((state) => {
    return state.SaveContent;
  });

  // // useRef 사용
  // let Title = useRef();
  // let Date = useRef();
  // let Context = useRef();

  // // value 이용
  // let Content = {
  //   title : '',
  //   context : '',
  //   date : '',
  // }

  const dispatch = useDispatch();

  const navigate = useNavigate();

  // Detail Page와 중복되는 함수
  const contentChangeHandler = (event) => {
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
      default:
        break;
    }
  };

  const saveBtnClickHandler = () => {
    dispatch({
      type: 'save',
      payLoad: Content,
    })
    dispatch({
      type: 'clear',
      payLoad: {
        title: '',
        date: '',
        context: '',
      }
    })
  };
  // Complete Page와 중복되는 함수
  const BtnClickHandler = (event, id) => {
    const type = event.target.name === 'deleteBtn' ? 'delete' : 'complete';
    dispatch({
      type,
      payLoad: id,
    })
  };

  return (
    <>
      <GlobalStyle />
      <div className='App'>
        <div className="save-Box">
          <InputContainer className="inputTitle">
            <label>제목</label>
            <input name='titleInput' onChange={contentChangeHandler} value={Content.title} maxLength={15} type="text" placeholder='제목을 입력하세요.(최대 15자)' />
            <label>기한 날짜</label>
            <input name='dateInput' onChange={contentChangeHandler} type="date" />
          </InputContainer>
          <InputContainer className='inputContext'>
            <label>상세 내역</label>
            <textarea name='contextInput' onChange={contentChangeHandler} value={Content.context} cols={30} rows={4} type="text" placeholder='내용을 입력하세요.' />
          </InputContainer>
          <InputContainer className='buttonBox'>
            <button onClick={saveBtnClickHandler}> 저장하기 </button>
          </InputContainer>
        </div>
        <div className='Card-List'>
          <button style={{
            color: 'red',
          }}>🕐 해야할 일</button>
          <button onClick={() => {
            navigate('/complete')
          }}>🎉완료 List</button>
          <Container>
            {card.map((card) => {
              if (card.isDone === false) {
                return <CardOne BtnClick={BtnClickHandler} key={card.id} card={card} />
              }
              return null;
            }
            )}
          </Container>
        </div>
      </div>
    </>
  )
}

export default Home