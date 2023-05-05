# The necessity Of Redux, And why?

프론트엔드를 하면서 가장 불편한게 무엇이냐고 묻는다면 그것은 바로 HTML DOM 구조의 복잡성이라고 생각할 수 있다.

요즘 모던 웹에서 우리가 흔히 보는 HTML CSS 구조들을 보면 간단해보이지만 실상은 그렇지 않다. flexbox,  gridbox 등을 이용해 간단한 Card를 만드는 데에도 각각의 정보들을 어떻게 모아주냐에 따라 div를 많이 써야할 때가 많았다.

그런 면에서 React 는 나에게 아주 편하게 문제해결을 도와줄 수 있게 되었다.

특히, Figma로 웹디자인을 하고 이를 실제로 구현할 때에, 반복되는 Element 구조를 나누어 '컴포넌트'화 하여 반복을 피할 수 있다.

## 반응(이벤트)가 많은 웹사이트에서 바닐라 자바스크립트의 한계

다만 문제가 또 생겼는데, 이는 바로 "렌더링"에 있었다.

기존 바닐라 자바스크립트에서는 EventListener를 통해서 이벤트에 따라 내가 교체할 css class, 특히 data 를 새롭게 반영을 하기 위해서는 DOM을 직접 다시 매번 수정해주어야 했어서 불편함을 많이 느꼈다.

이에 나는 React에서 사용하는 State 개념을 통해 다시한번 React의 편리함을 느꼈다. react 에서 State로 선언된 변수들은 모두 해당 State의 값이 매번 바뀔때마다 렌더링이 다시 실행된다. 여러개의 카드의 내용을 담는 배열을 State로 설정한다면, 해당 배열이 바뀔 때마다 그 여러 카드들의 렌더링이 다시 된다는 의미이다. `이를 setInterval로 직접 한번 만들어보는 시도도 재밌을 거 같기도 하다.`

## 비동기 처리로 인한 한계

하지만 이번에 `async function`으로 받은 정보를 처리하는 과정에서 문제가 생겼다. 이를 통해 받아온 정보는 모두 useEffect로 처리 해야한다는 점이다. 즉, 최적화에 문제가 생긴다는 점이다. 그렇다고 해서 최적화를 위해 여러 컴포넌트에서 사용될 State를 일일이 Props로 전달해야할까? 그건 아니다.

따라서 나는 이전 meal-db 프로젝트에서 react context api를 채택하였다. 이는 여러 컴포넌트에서 사용될 state 변수 등을 글로벌한 공간에 정의함으로써 불필요한 useEffect 등을 각 컴포넌트에서 중복적으로 실행하게 하는 것을 막아주어 웹사이트의 최적화를 돕는다.

하지만 react context api는 매번 만들 때마다 내가 직접 context 함수를 만들어야하고, 이들에 대한 렌더링을 어떻게 해야할지 내가 직접 설정해주어야한다. 코드를 직접 짜기위해 구글링/검색 하는 시간이 훨씬 많아진다는 것이다.

이를 위해 나는 `Redux`를 채택하기로 했다.

## Redux를 사용하는 간단한 방법

아래는 redux를 사용해야하는 이유를 설명해주는 bing ai의 답변이다.

> Redux는 React에서 애플리케이션의 상태를 관리하는 데 사용됩니다. Redux는 애플리케이션의 상태를 분리하여 글로벌 저장소를 만들어 다른 모든 컴포넌트로 상태를 공급합니다 ⁴. 이는 복잡하고 흐름을 따라가기 어려운 상태 관리에 대한 문제를 해결하기 위해 사용됩니다 ². Redux는 애플리케이션의 상태를 예측 가능하게 만들어주고, 일관적으로 동작하며, 서로 다른 환경에서 작동하고, 테스트하기 쉬운 앱을 작성하는 데 도움이 됩니다 ³.
> 
> Source: Conversation with Bing, 4/21/2023(1) Redux로 시작하기: 왜 Redux인가? - Code Envato Tuts+. https://code.tutsplus.com/ko/tutorials/getting-started-with-redux-why-redux--cms-30349 Accessed 4/21/2023.
> (2) React에서 Redux가 왜 필요할까? - 휴몬랩 기술블로그. https://devlog-h.tistory.com/26 Accessed 4/21/2023.
> (3) Redux 시작하기 | Redux - js. https://ko.redux.js.org/introduction/getting-started/ Accessed 4/21/2023.
> (4) Redux in ReactJS - W3schools. https://www.w3schools.blog/redux-reactjs Accessed 4/21/2023.

또한 아래는 간단한 Redux 사용 방법에 대한 bing AI의 답변이다.

먼저 `npm install react-redux`와 `npm install redux`를 실행하여 필요한 패키지를 설치합니다. 그런 다음 `redux` 패키지의 `createStore` 함수를 사용하여 Redux store를 만듭니다. 그리고 `react-redux` 패키지의 `Provider` 컴포넌트를 사용하여 store를 앱의 모든 컴포넌트에서 사용할 수 있도록 합니다.

컴포넌트에서는 `useSelector` hook을 사용하여 Redux store의 현재 상태에 접근하고 `useDispatch` hook을 사용하여 상태를 업데이트하기 위해 액션을 전송할 수 있습니다. 또한 `connect` 함수를 사용하여 컴포넌트를 Redux store에 연결하고 상태와 디스패치를 컴포넌트의 props에 매핑할 수 있습니다.

다음은 React Redux를 사용하는 간단한 카운터 앱의 예제입니다:

```javascript
import React from 'react';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

// 간단한 리듀서 정의
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

// Redux store 생성
const store = createStore(counterReducer);

// Counter 컴포넌트 정의
const Counter = () => {
  // Redux store에서 현재 카운트 가져오기
  const count = useSelector(state => state);

  // Redux store에서 dispatch 함수 가져오기
  const dispatch = useDispatch();

  // 카운트 증가 및 감소 이벤트 핸들러 정의
  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  };
  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  // Counter 컴포넌트 렌더링
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

// App 컴포넌트 정의
const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

export default App;
```

이것은 React Redux와 코드를 함께 사용하는 방법을 보여주기 위한 간단한 예제입니다. 공식 Redux 문서에서 더 자세한 정보와 예제를 찾을 수 있습니다.