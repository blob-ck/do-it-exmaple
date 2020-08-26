import React from 'react';

class ListExample extends React.PureComponent {
  render() {
    const priceList = [1000, 2000, 3000, 4000];
    const prices = priceList.map((price, i) => <div key={`pl_${i}`}>가격: {price}원</div>);
    const todoList = [
      { taskName: '빨래하기', finished: false },
      { taskName: '공부하기', finished: true },
    ];
    const todos = todoList.map((todo, i) => <div key={todo.taskName}>{todo.taskName}</div>);
    return (
      <div>
        <label>[가격목록]</label>
        {prices}
        <p>-----------------------------------------------------------------------</p>
        <label>[To Do List]</label>
        {todos}
        <p>-----------------------------------------------------------------------</p>
        <label>[Done List]</label>
        {todoList
          .filter((todo) => todo.finished)
          .map((todo, i) => (
            <div key={todo.taskName}>{todo.taskName}</div>
          ))}
      </div>
    );
  }
}

export default ListExample;
