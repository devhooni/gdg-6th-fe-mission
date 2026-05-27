Context API의 한계: Context의 상태 중 일부만 변경되어도, 해당 Context를 구독(useContext)하고 있는 모든 컴포넌트가 강제로 리렌더링된다.
라이브러리의 해결책: 외부 라이브러리들은 Selector 기능을 제공한다. 상태의 특정 부분만 골라서 구독할 수 있기 때문에, 내가 쓰지 않는 다른 상태가 바뀌어도 내 컴포넌트는 리렌더링되지 않아 성능 최적화에 유리하다.

Redux Toolkit에 대해여

기존 Redux의 고질적인 문제점
과도한 보일러플레이트: 하나의 상태를 바꾸기 위해 Action Type, Action Creator, Reducer 등 작성해야 할 코드 양이 너무 많았다

복잡한 초기 환경 세팅: Store 설정을 위해 Redux Thunk, DevTools 등 여러 패키지를 직접 설치하고 수동으로 결합해야 했다.

불변성 관리의 피로함: 상태를 업데이트할 때마다 ...state 같은 전개 연산자를 써서 새로운 객체를 반환해야 하는 번거로움이 있었다.

Redux Toolkit이 해결한 방식
configureStore() (간편한 스토어 설정): Redux DevTools 확장 프로그램 연동과 redux-thunk(비동기 미들웨어)가 기본적으로 내장되어 있어 코드 한 줄로 스토어 개설이 가능하다.

createSlice() (코드의 획기적인 다이어트): 기존에 따로 분리되어 있던 Action Type, Action Creator, Reducer를 한 번에 합쳐서 정의할 수 있게 되었다.

Immer 라이브러리 내장 (불변성 자동화): 내부적으로 Immer를 사용하므로, 더 이상 ...state를 쓰지 않고 state.value = 1 처럼 직접 상태를 수정하는(Mutate) 것처럼 코드를 작성해도 불변성이 유지된다.
