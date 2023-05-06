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

# 사용 package

0. react, react-dom
1. 상태(state)관리툴 : redux, react-redux
2. react-router-dom
3. styled-components
4. redux-devtools-extension 내 composeWithDevTools() 기능

# 추가 기능 

1. 날짜 입력용 input 추가
-> 기한 날짜 저장 기능 추가
2. 폰트 적용
3. 진행 중 page와 완료 page react-router-dom으로 분할 & tap기능과 비슷하게 적용
4. 완료 페이지에서는 상세보기와 Due Date 기능 off ( css property display : none 과 visibility : visible 적용 )

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

# 코드리뷰 후 개선사항
1. action creator 생성 
- action creator 없이 코드를 작성하면 Human Error가 발생할 위험성이 큼 -> modules 폴더 내 ActionCreator.js 라는 파일을 생성하여 Action value 및 Action creator를 생성

2. 초기화 하는 부분 변경 
- 기존: 빈 객체를 payLoad로 넣어주는 형태 -> state의 초기화 값을 return하도록 설정

3. if-else 구문을 삼항연산자로 변경

4. onChange()에서 event 전체를 가져오는 방식 -> 구조분해 할당을 통해 필요한 값만 가져오도록 설정

5. 카드 완료/취소 에 따라 페이지 이동하도록 설정
- 완료 Button 클릭 -> navigate('/complete')
- 취소 Button 클릭 -> navigate('/')

+ localStroage.setItem / composeWithDevTools 추가
