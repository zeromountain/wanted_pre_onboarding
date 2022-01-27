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
