import React from 'react';
import TimerView from './pages/TimerView'
import appStore from './store/appState'
import TodoList from "./pages/TodoList";
import todoStore from "./store/todoStore";
function App() {
  return (
    <div className="App">
      TimerView
      {/* <TimerView appStore={appStore}/> */}
      <TodoList todoStore={todoStore} />
    </div>
  );
}

export default App;
