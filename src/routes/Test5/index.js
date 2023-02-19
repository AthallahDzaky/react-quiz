
import { cssWrapper } from './style';

import Comp1 from "./Comp1";
import Comp3 from "./Comp3";
import { useState } from 'react';
import { createContext } from 'react';

const question = (
  <ul>
    <li>primarily, user can input the value from <code>#mynumber</code></li>
    <li>
      please add or reduce the value by 1 when user click{' '}
      <code>#numbermin</code> and <code>#numberplus</code> button
    </li>
    <li>Show <b>ODD</b> or <b>EVEN</b> in first render section</li>
    <li>
      only show <code>#mynumber1</code> input when <code>#overwrite</code> checkbox is checked in <code>Comp1</code>
    </li>
    <li>
      user can input in <code>#mynumber1</code> and render the latest source of input in <code>Comp1</code> and it's value in{' '}<code>Comp2</code>
    </li>
    <li><code>Comp2</code> will display latest inputted from <code>#mynumber</code> &amp; <code>#mynumber1</code></li>
    <li><code>Comp3</code> will display <code>#mynumber</code></li>
    <li>show <code>Comp4</code> modal when user click <b>Show Modal</b> button in <code>Comp3</code></li>
    <li>update whole <code>input</code> and value render when user input <code>#mynumber2</code></li>
  </ul>
);

export const MyNumberContext = createContext({
  myNumber: 0,
  setMyNumber: () => {}
});

export const MyNumberContext2 = createContext(0)

const Test5 = () => {
  const [myNumber, setMyNumber] = useState(0);
  const value = { myNumber, setMyNumber };
  
  const [oddOrEven, setOddOrEven] = useState('')
  const handleMyNumberChange = (event) => {
    setMyNumber(event.target.value)
    checkOddOrEven(event.target.value)
    setLastNumber(event.target.value)
  }
  const handleAddMyNumber = (_) => {
    setMyNumber(myNumber + 1)
    checkOddOrEven(myNumber + 1)
    setLastNumber(myNumber + 1)
  }
  const handleSubMyNumber = (_) => {
    setMyNumber(myNumber - 1)
    checkOddOrEven(myNumber - 1)
    setLastNumber(myNumber - 1)
  }
  const checkOddOrEven = (number) => {
    if ((number % 2) === 1) {
      setOddOrEven('Odd')
    } else {
      setOddOrEven('Even')
    }
  }

  const [myNumber1, setMyNumber1] = useState(0);
  const [lastNumber, setLastNumber] = useState(0);

  return(
    <div>
      {question}
      <MyNumberContext.Provider value={value} >
        <button id="numbermin" type="button" onClick={handleSubMyNumber}>-</button>
        <input id="mynumber" type="text" placeholder="input mynumber" onChange={handleMyNumberChange} value={myNumber}/>
        <button id="numberplus" type="button" onClick={handleAddMyNumber}>+</button>
      <br/>
      <br/>
      <div className={cssWrapper}>
        The inputted value is {oddOrEven}*
      </div>
      <Comp1
        handleMyNumber1OnChange={setMyNumber1}
        myNumber1={myNumber1}
        myNumber={myNumber}
        lastNumber={lastNumber}
        setLastNumber={setLastNumber}
      />
      <Comp3 />
      </MyNumberContext.Provider>
    </div>
  )
}

export default Test5;