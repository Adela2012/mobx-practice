import React, { useState } from 'react';
import TimerView from './pages/TimerView'
import appStore from './store/appState'
import UseLocalStore from "./pages/UseLocalStore";
import TodoList from "./pages/TodoList";
import todoStore from "./store/todoStore";

function App() {
  const [countInit, setCountInit] = useState(-1);
  return (
    <div className="App">
      <button onClick={() => setCountInit(countInit + 1)}>
        add countInit{countInit}
      </button>
      {/* <TimerView appStore={appStore}/> */}
      <TodoList todoStore={todoStore} />
      {/* <UseLocalStore init={countInit} /> */}
    </div>
  );
}

export default App;
