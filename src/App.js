import React from 'react';
import TimerView from './pages/TimerView'
import appStore from './store/appState'
function App() {
  return (
    <div className="App">
      TimerView
      <TimerView appStore={appStore}/>
    </div>
  );
}

export default App;
