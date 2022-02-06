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

### Toggle

**구현**

- type이 checkobx인 inpu의 기본 체크 박스 스타일을 none으로 없애고 스타일 커스텀
- 체크가 된 상태 `true` 체크가 되지 않은 상태 `false`를 통해 ON, OFF 문자열 렌더
- 체크 여부에 따라 작은 원(토글버튼)이 이동하도록 스타일 적용
  - transform

**에로사항**

- tailwind의 @apply 함수를 적용하는데 애를 먹음
  - [공식문서](https://tailwindcss.com/docs/functions-and-directives#apply)

**동작 방법**

<img src="https://i.ibb.co/dDz19DD/Toggle.gif">

- 토글을 클릭할때마다, 작은 원(토글 버튼)이 좌우로 이동하고, 배경색이 변경

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

<img src="https://i.ibb.co/jWCbBm6/Modal.gif">

- Modal 컴포넌트의 Open Modal 컨텐트 요소를 가지고 있는 버튼을 클릭하면 `isOpen`의 상태가 false에서 true로 변경
- `isOpen`의 상태가 true이면 Portal 컴포넌트가 실행되어 Portal 컴포넌트의 자식 요소(`Modal Body`)를 렌더링
  - `dimed` 처리된 영역 클릭 시, `isOpen`의 상태가 false로 변경
  - Modal Body 내부의 `x` 버튼 클릭 시, `isOpen`의 상태가 false로 변경

### Tab

**구현**

- `fetchTabsData`: 각 탭의 title, content, isActive 데이터를 가진 배열을 프라미스 객체로 반환하는 함수 구현
- Tab 컴포넌트에서 `fetchTabsData`를 통해 각 탭의 데이터를 화면에 렌더링되도록 구현
- isActive가 true인 경우 선택된 탭으로 구현하고, isActive가 true인 객체의 content를 각 탭의 컨텐츠 요소로 구현

**에로사항**

- [ ] `fetchTabsData`로 데이터 초기화할 때, 로딩 처리 고민,,,

**동작 방법**

<img src="https://i.ibb.co/J2b4ccb/Tab.gif">

- `useEffect` 훅을 통해서 Tab 컴포넌트가 렌더링되고 1초 후, `tabsData`의 상태가 업데이트
- `tabsData`의 상태가 업데이트되면, 데이터의 변화에 따라 화면에 렌더링

### Tag

**구현**

- tags 상태를 통해서 태그를 렌더링
- `addTags`: 태그를 추가하는 함수
  - 엔터키를 입력받았을때만 함수 실행
  - 빈 값을 입력받지 않았을때만 tags 상태를 업데이트
- `removeTags`: 태그를 삭제하는 함수
  - `tags` 각 요소의 인덱스와 타겟 인덱스 비교해 인덱스 값이 같은 요소 필터

**에로사항**

- [ ] 태그가 여러 개 생성되면, input 태그가 다음 행으로 밀리는 문제 해결 필요

**동작 방법**

<img src="https://i.ibb.co/mCYYkmh/Tag.gif">

- input에 내용 입력 후, 엔터 키를 입력하면 태그 등록
- x 버튼 클릭 → 태그 삭제

### AutoComplete

**구현**

> `words`: 초기 단어 목록
>
> `text`: input을 통해 입력받은 값
>
> `suggestions`: 입력받은 값과 일치하는 `words` 목록

- 단어 목록을 비동기적으로 로드해 `words` 초기화해 렌더링
- `handleChange`: 값이 입력되면, 입력된 값과 유효한 단어 목록(`suggestions`)과 `text` 업데이트
- `addText`: `suggestions` 목록의 요소를 클릭하면 해당 요소를 `text`로 업데이트하고 `suggestions` 목록 초기화
- `onKeyUp`
  - 값 입력 후 ESC 누른 경우, text와 suggestions 초기화
  - 값 입력 후 Enter 누른 경우, input의 value를 words에 추가하고, text와 suggestions 초기화
- `removeText`: x 버튼 클릭 시, `text`와 `suggestions` 초기화

**에로사항**

- [ ] `suggestions` 목록 렌더링 시에, input의 위치가 위로 밀리는 문제 해결 필요

**동작 방법**

<img src="https://i.ibb.co/b1F7XR6/Auto-Complete.gif">

- `words`의 단어에 포함되는 문자 입력하면, `suggestions` 목록 렌더링
- x 버튼 클릭하면, `suggsetions` 목록과 input 값 초기화

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

<img src="https://i.ibb.co/T4rwqXk/Click-To-Edit.gif">

- 초기 렌더링 시, initial state의 값이 name:김코딩 age:20 출력
- 각 input에 포커싱되면, input의 value를 수정할 수 있고 input에 포커싱이 벗어나면(다른 요소 클릭) 업데이트된 state가 반영되어 이름,나이가 렌더링
