import React from 'react';
import Button from '../base/button';
import Radio from '../base/radio';
import Checkbox from '../base/checkbox';
import Input from '../base/input';
import CardSearch from '../base/cardSearch';
import Select from '../base/select/'

function TesteComponents() {
  return (
    <div className="App">
      <h1 className="title">Testing Components</h1>
      <br/>
      <Button transparent={false} text="Lorem Ipsum" />
      <br/>
      <Button transparent={true} onButtonClicked={(e) => console.log(e)} />
      <br/>
      <Radio 
        options = {[
          {
            value: 'Value 01'
          },
          {
            value: 'Value 02'
          },
          {
            value: 'Value 03'
          }
        ]}
        onChangeValue={e => console.log(e)} />
      <br/>
      <Checkbox
        value="Olar"
        onCheckBoxClicked={(e) => console.log(e)}
      >
      </Checkbox>
      <br/>
      <Input
        placeholder='Digite sua pesquisa'
        onValueInput={(e) => console.log(e)}
        maxLength='10'
      >
      </Input>
      <br/>

      <CardSearch>
      </CardSearch>
      <br/>
      <Select
        options= {['Test F01', 'Test F02', 'Test F03', 'Test F04']}
        onSelectedValue = {(e) => console.log(e)}
      >
      </Select>
    </div>
  );
}

export default TesteComponents;