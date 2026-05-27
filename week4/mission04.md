AdminCard.jsx, AdminInputGroup.jsx, AdminSection.jsx와 같이 관리자 기능에 종속된 컴포넌트들을 components 폴더 내부에 명확하게 격리하여 관리했다.

AdminPage.jsx, CategoryPage.jsx, PricePage.jsx, SortPage.jsx 등의 주요 페이지 컴포넌트들을 src 바로 아래에 배치함으로써 개발 초기 단계에서 각 라우트별 페이지에 빠르게 접근하고 수정할 수 있는 기민함을 확보했다.

애플리케이션의 진입점인 main.jsx와 App.jsx, 전역 스타일인 index.css, 그리고 상단 바 역할을 할 Navbar.jsx가 루트에 위치하여 전체적인 흐름을 한눈에 파악하기 용이했다.
