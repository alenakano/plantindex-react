import React from 'react';
import Button from './components/button';
import './style.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button transparent={false} text="Lorem Ipsum" />
        <Button transparent={true} />
      </header>
    </div>
  );
}

function buttonTest() {
  console.log('ENTROU ->');
}

export default App;