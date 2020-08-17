# **Component Life Cycle**

> Create Component

```
constructor()
getDerivedStateFromProp()
render()
componentDidMount()
```

<br/>

> Update Compnent (props 변경 또는 setState() 호출시)

```
getDerivedStateFromProp()
if (forceUpdate() || shouldComponentUpdate()) {
  render()
  getSnapshotBeforeUpdate()
  componentDidUpdate()
}
```

<br/>

> Destroy Component

```
componentWillUnmount()
```

<br/>
<br/>
<br/>

---

# **8 Functions**

> ### **render()**

```
데이터가 변경되어 새 화면을 그려야 할 때 자동으로 호출되는 함수.
```

> ### **getDerivedStateFromProps(props, state)**

```
정적 함수이므로, this.props 나 this.state 처럼 this.getDerivedStateFromProps 로 접근할 수 없다.
props는 상위 컴포넌트에서 전달된 값이고, state는 현재 컴포넌트의 값이다.
상위에서 전달된 props를 현재 컴포넌트의 state에 연동할 때 주로 사용된다.
```

> ### **componentDidMount()**

```
render()가 jsx를 화면에 그린 이후 호출되는 함수로,
화면에 컴포넌트가 모두 표현된 이후 해야하는 작업들을 여기에서 실행하면 된다.
```

> ### **shouldComponentUpdate(nextProps, nextState)**

```
props나 setState()를 호출하여 state를 변경했을 때 화면을 새로 출력해야하는지 판단하는 함수.
데이터 변화를 비교하는 작업을 포함하므로 리액트 성능에 영향을 많이 줌.
화면 변경을 위해 검증 작업을 해야하는 경우 이 함수를 사용.
forceUpdate()를 호출했다면 shouldComponentUpdate()는 호출되지 않음.
```

> ### **getSnapShotBeforeUpdate(prevProps, prevState)**

```
컴포넌트의 변경된 내용이 가상 화면에 완성된 이후 호출되는 함수.
컴포넌트가 화면에 실제로 촐력되기 전에 호출되므로,
화면에 출력될 엘리먼트의 크기 또는 스크롤 위치 등의 DOM 정보에 접근할 때 사용.
반환값은 아래 componentDidUpdate()의 3번째 인자로 사용된다.
```

> ### **componentDidUpdate(prevProps, prevState, snapShot)**

```
컴포넌트가 화면에 실제로 출력된 이후 호출되는 함수.
DOM 정보를 변경할 때 사용.
```

> ### **componenWillUnmount()**

```
컴포넌트가 소멸되기 직전 호출되는 함수.
컴포넌트에서 감시하고 있는 작업들을 해제할 때 사용하여 메모리 누수를 방지.
예) setInterval()같은 함수를 clearInterval() 로 해제
```
