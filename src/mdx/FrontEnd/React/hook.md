# hook이란?

> 리액트의 훅은 16.8 버전부터 새로 추가된 기능이라고 합니다. Hook은 함수형 컴포넌트에서 React state와 생명주기 기능(lifecycle features)을 “연동(hook into)“할 수 있게 해주는 함수라고 합니다. Hook은 class 안에서는 동작하지 않으며, 대신 class 없이 React를 사용할 수 있게 해주는 것이라고 합니다.
>
> > hook은 함수로 구현되어 있으며, 앞에 use키워드를 사용합니다.

## useState

> useState는 state 변수를 추가할 수 있는 hook이다.

### 기본적인 사용방법

```js
const [state, setState] = useState(0);

setState(state + 1);
```

useState Hook은 함수 컴포넌트의 재렌더링을 트리거한다다. 즉, useState Hook을 사용하여 상태를 변경하면 함수 컴포넌트가 다시 렌더링된다.

### 고급 시용방법

### 1. prevState

```js
const [state, setState] = useState(0);
const threeIncrease = () => {
  setState(state + 1);
  setState(state + 1);
  setState(state + 1);
};
```

예를 들어 이런 함수가 실행된다 하였을 때, 성능상의 이유로 상태 업데이트를 예약하고 여러 업데이트를 일괄처리하게 되기 때문에 setState(0+1)이란 함수가 세번 호출되기에 threeIncrease라는 함수를 호출되었을 시 state가 1이 증가하는 결과가 나오게 된다.

```js
const [state, setState] = useState(0);
const threeIncrease = () => {
  setState((prev) => prev + 1);
  setState((prev) => prev + 1);
  setState((prev) => prev + 1);
};
```

그래서 다음과 같이 prevState를 사용하였을 때 이전 상태 값으로 값을 덮어 씌워 기대했던 동작대로 3이 증가하는 함수가 실행된다.

### 2. lazy initialization

```js
const [state, setState] = useState(new Date());
```

이렇게 state hook을 선언한다고 가정하면 컴포넌트가 리렌더링될 때 마다 초기값이 실행되게 되는데

```js
const [state, setState] = useState(() => new Date());
```

함수로 초기값을 지정하면 딱 한번만 실행하게 된다. 그러므로 연산비용이 많이들면 저장해놓는 게 성능적으로 좋다.
