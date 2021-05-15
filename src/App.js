import React from 'react';
import Button from './components/button';
import Radio from './components/radio';
import Checkbox from './components/checkbox';
import Input from './components/input';
import CardSearch from './components/cardSearch';
import Select from './components/select'

import './style.scss';

function App() {

  return (
    <div className="App">
      <Button transparent={false} text="Lorem Ipsum" />
      <br/>
      <Button transparent={true} onButtonClicked={buttonTest} />
      <br/>
      <div onChange={onChangeValue} >
        <Radio name = 'teste' value='opcao1' defaultCheck={true}>
        </Radio>
        <Radio name = 'teste' value='opcao2'>
        </Radio>
      </div>
      <br/>
      <Checkbox
        value="Olar"
        onCheckBoxClicked={getCheckboxValue}
      >
      </Checkbox>
      <br/>
      <Input
        placeholder='testettetete'
        onValueInput={onValueInput}
        maxLength='10'
      >
      </Input>
      <br/>

      <CardSearch>
      </CardSearch>
      <br/>
      <Select
        options= {['Test F01', 'Test F02', 'Test F03', 'Test F4']}
        onSelectedValue = {(e) => console.log(e)}
      >
      </Select>
    </div>
  );
}

function onChangeValue(event) {
  console.log('CHAMOUUUUU', event.target.value);
}

function onValueInput(value) {
  console.log(value);
}

function buttonTest() {
  console.log('ENTROU ->');
}

function getCheckboxValue(value) {
  console.log('CHECKBOX', value)
}

export default App;