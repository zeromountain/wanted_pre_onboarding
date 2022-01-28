# custom-component

원티드 프리온보딩 코스

## 폴더 구조

```
/src
	App.js
	App.css
	/component
		Toggle.js
		Modal.js
		Tab.js
		Tag.js
		AutoComplete.js
		ClickToEdit.js
```

## Components

### Modal

**구현**

- 🤔 HOW

  - `react-dom`의 `createPortal` 함수를 사용해 Modal 컴포넌트를 App 컴포넌트 바깥에서 렌더링
    - index.html → `<div id="modal-root"></div>` 엘리먼트를 추가해 해당 엘리먼트에 Portal 컴포넌트를 렌더링
      - 기존 `<div id="root"></div>` 엘리먼트에서 렌더링되던 App 컴포넌트의 바깥에서 렌더링 가능

- ？ WHY
  - DOM의 계층 구조에 종속되지 않고 Modal 컴포넌트를 렌더링할 수 있기 때문에

**에로사항**

- Modal 컴포넌트의 style을 tailwind만으로 구현해보려 했으나, 아직 사용이 미숙해 styled-components를 혼합해 style 구현

**동작 방법**

- Modal 컴포넌트의 Open Modal 컨텐트 요소를 가지고 있는 버튼을 클릭하면 `isOpen`의 상태가 false에서 true로 변경
- `isOpen`의 상태가 true이면 Portal 컴포넌트가 실행되어 Portal 컴포넌트의 자식 요소(`Modal Body`)를 렌더링
  - `dimed` 처리된 영역 클릭 시, `isOpen`의 상태가 false로 변경
  - Modal Body 내부의 `x` 버튼 클릭 시, `isOpen`의 상태가 false로 변경

### ClickToEdit

**구현**

- 🤔 HOW
  - `useState`를 통해 `user` 객체의 상태 관리
  - input 엘리먼트에 `onBlur` 이벤트 사용해 인풋에서 포커스가 벗어날때, `user` 객체의 상태 업데이트
- ？WHY
  - 이름과 나이를 따로 나누어서 상태를 관리하는 것보다 `user` 객체로 관리하는 것이 효율적이라고 생각함
  - `onChange` 이벤트를 사용했을 때, input 엘리먼트의 value가 변경되면 바로 바로 업데이트되고, 폼 제출(클릭, 엔터) 이전에 인풋에 계속 포커스가 유지되기 때문에 `onBlur` 이벤트 사용을 고려함

**에로사항**

- form, label, input 엘리먼트를 사용해 구현을 하려고 했지만, `onChange` 이벤트에서 상태가 바로 업데이트 되는 것과 포커스가 유지되는 것을 해결해보기 위해서 2시간 삽질,,
- 리액트 공식문서 참고하던 중, `onBlur` 이벤트의 예시를 보고 해결 [공식 문서 링크](https://ko.reactjs.org/docs/events.html)

**동작 방법**

- 초기 렌더링 시, initial state의 값이 name:김코딩 age:20 출력
- 각 input에 포커싱되면, input의 value를 수정할 수 있고 input에 포커싱이 벗어나면(다른 요소 클릭) 업데이트된 state가 반영되어 이름,나이가 렌더링
