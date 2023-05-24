# 과제 목적

기존에 구현한 TodoList를 백엔드 서버와 연동하여 구현하기

- API 명세서에 따라 request하기

# 구현해야할 기능

1. 로그인 박스 변경

- 로그인 여부에 따른 UI 변경

2. 로그인 성공 시 유저 정보 가져와서 UI상으로 띄워주기
3. 로그인한 user의 accessToken값에 따라 다른 TodoList 조작 (Read, Post, Delete 등)

# 사용 package

0. react, react-dom
1. 상태(state)관리툴 : redux, react-redux
2. react-router-dom
3. styled-components
4. redux-devtools-extension 내 composeWithDevTools() 기능
5. react Query

# 추가 기능

향후 일정에 따라 추가 예정

# 발생한 문제점

1. 로그인 시 다른 유저의 data 가져옴
   => 백엔드에 요청하여 로직 수정, 해결

2. 로그인 성공하고 새로고침 시 로그인 유지되지 않음
   => useEffect 사용하여 Mount 시 마다 user정보 가져오도록 설정 & isLoginned 값 true로 설정

2.1 위와 같이 진행 시 처음 내부 스테이트가 초기값일 경우 오류 발생

3. 상세보기 등 axios 요청 url에 id 값 들어가는 기능들 작동하지 않음
   => 백엔드에 물어보니 다른 방식으로 url에 요청 (params 제거 & id값이 `/api/todo/${id}` 형태로 들어가야했음)

4. CORS 문제 : 기존 사용하던 Vercel로 배포 시 기본적으로 https 프로토콜 사용, But 만들어지 백엔드 서버의 경우 http 프로토콜로 작동하여 CORS 문제 발생 => EC2 서버를 통해 http로 배포

5. 배포 후 백엔드 서버와 data 주고받기 안됨 -> 진행 중....
