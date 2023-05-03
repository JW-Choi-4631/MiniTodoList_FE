import styled from "styled-components";

const hiddenStyle = (card) => card.isDone === true ? { display: 'none', } : { visibility: 'visible', };

const Container = styled.div`
  display : flex;
  flex-wrap : wrap;
  gap : 4.15%;
  margin: 10px 0px;
  background-color : #D9D9D9;
  opacity: 0.9;
  width : 100%;
  border-radius : 10px;
`

export { hiddenStyle, Container };   // 여러개 export하려면 객체 형태로 묶어야 함