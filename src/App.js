import React, {useEffect} from 'react';
import Button from './components/button';
import Radio from './components/radio';
import './style.scss';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Button transparent={false} text="Lorem Ipsum" />
        <Button transparent={true} onButtonClicked={buttonTest} />
        <form onSubmit={console.log()}>
        <div onChange={onChangeValue} >
          <Radio name = 'teste' value='opcao1' defaultCheck={true}>
          </Radio>
          <Radio name = 'teste' value='opcao2'>
          </Radio>
        </div>
    
        </form>
        <Radio>
        </Radio>
        <Radio>
        </Radio>
      </header>
    </div>
  );
}

function onChangeValue(event) {
  console.log('CHAMOUUUUU', event.target.value)
}

function buttonTest() {
  console.log('ENTROU ->');
}

export default App;