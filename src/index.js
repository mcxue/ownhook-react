import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {useStore,StoreContext} from "./stores/useStore";
import Text from './components/text'
import Father1 from "./components/father1";
import Father2 from "./components/father2";
function App() {
  return (
    <div className='app'>
      <Text />
      <StoreContext.Provider value={useStore()}>
        <div className='test-wrapper'>
          <Father1 />
          <Father2 />
        </div>
      </StoreContext.Provider>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);