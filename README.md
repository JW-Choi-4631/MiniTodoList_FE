# 과제 목적

1. 과제 1에서 props 및 useState()를 이용하여 Todo List 추가 및 완료상태 변경 기능을 redux를 이용하여 적용해보기
2. Update 기능 추가
3. react-router-dom 사용하여 페이지 분할 
4. styled-components 사용하여 css-in-js 사용하기 

# 구현해야할 기능

1. Create ToDo 
2. Read Todos, Todo
3. Update Todo
4. Delete Todo

# 사용 tool

1. 상태(state)관리툴 : redux, react-redux
2. react-router-dom
3. styled-components

# 추가 기능 

1. 날짜 입력용 input 추가
-> 기한 날짜 저장 기능 추가
2. 폰트 적용
3. 진행 중 page와 완료 page react-router-dom으로 분할 & tap기능과 비슷하게 적용
4. 완료 List 페이지에서는 상세보기와 Due Date 기능 off ( css property display : none 과 visibility : visible 적용 )

# 발생한 문제점

1. context module 생성 후 dispatch로 state 변경 중 값 입력되지 않는 현상 발생
-> 확인 해보니 다른 module(Card module)에서 import 해오는 것 확인 , 수정

2. input 에서 date 값 받아와 계산 중 오류 발생
-> input으로 들어온 date는 string값임, 따라서 new Date()로 Date객체 생성 후 계산 실행

3. delete 기능 구현 중 해당 id뿐만 아니라 다른 id의 Card 전부 삭제되는 현상 발생
-> reducer에서 return 시 filter 이용하여 새로운 배열(newCardList)을 생성하여 [newCardList] 형태로 return하여 발생한 현상, newCardList만 return하도록 수정 
   (filter으로 만들어진 것은 이미 배열 객체이다. 배열 객체에 다시 배열을 씌워 2차원 배열 형태로 만들어 return 하여 발생한 현상)
   
# 향후 추가 필요한 기능
-> 실시간으로 남은 시간 보여주는 것 (Date.now() & Content.date 를 함수를 이용해 일정 시간흐르면 업데이트 하는 식으로 적용 가능)  

