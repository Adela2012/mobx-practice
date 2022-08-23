import React, { Component, Children, useReducer, useState } from "react";
// import {observer, Observer, useObserver} from "mobx-react";

import { useObserver } from "../i-mobx-react-lite/index";

// @observer
const TodoList = (props) => {
    const [flag, setFlag] = useState(false)
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    console.log(22);
    return useObserver(() => (
        <div>
            <h3>TodoList</h3>
            <span onClick={() => setFlag(!flag)}>{flag ? 1 : 0}</span>
            {props.todoStore.todos.map(todo => (
                <Todo
                    key={todo.id}
                    todo={todo}
                    change={props.todoStore.change}
                />
            ))}
            <p>未完成任务： {props.todoStore.unfinishedCount}个</p>
        </div>
    ), 'abc', { useForceUpdate: () => forceUpdate });

}

export default TodoList;

// 如何给组件添加响应式
// // 方法1： observer hoc（高阶组件：接收组件为参数并且返回一个新组件的函数）
// const Todo = observer(({todo, change}) => {
//   console.log("todo props"); //sy-log
//   return (
//     <div>
//       <input
//         type="checkbox"
//         checked={todo.finished}
//         //onChange={() => (todo.finished = !todo.finished)}
//         onChange={() => change(todo)}
//       />
//       {todo.title}
//     </div>
//   );
// });

// 方法2： Observer component
// const Todo = ({todo, change}) => {
//   return (
//     <Observer>
//       {() => (
//         <div>
//           <input
//             type="checkbox"
//             checked={todo.finished}
//             //onChange={() => (todo.finished = !todo.finished)}
//             onChange={() => change(todo)}
//           />
//           {todo.title}
//         </div>
//       )}
//     </Observer>
//   );
// };

// 方法3： useObserver hook
const Todo = ({ todo, change }) => {
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    return useObserver(
        () => (
            <div>
                <input
                    type="checkbox"
                    checked={todo.finished}
                    onChange={() => change(todo)}
                />
                {todo.title}
            </div>
        ),
        undefined,
        // { useForceUpdate: () => forceUpdate }
    );
};
