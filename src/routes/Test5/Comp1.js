import { cssWrapper } from './style';

import { useState } from "react";
import Comp2 from "./Comp2";

const Comp1 = (props) => {
  const [value, setValue] = useState(0);
  const handleCheckboxOnChange = (event) => {
    if (event.target.checked) {
      setValue(1)
    } else {
      setValue(0)
    }
  }

  const handleMyNumber1OnChange = (event) => {
    props.handleMyNumber1OnChange(event.target.value)
    props.setLastNumber(event.target.value)
  }

  return(
    <div className={cssWrapper}>
      Latest Inputted from <code>[Test5/Comp1]*</code>
      <br/>
      <br/>
      <label htmlFor="overwrite">
        Local overwrite: <input id="overwrite" type="checkbox" value={value} checked={value===1} onChange={handleCheckboxOnChange}/>
        {/* only show when overwrite is checked */}
        <input id="mynumber1" type="text" placeholder="input mynumber1" value={props.myNumber1} onChange={handleMyNumber1OnChange}/>
      </label>
      <Comp2
        myNumber={props.myNumber}
        myNumber1={props.myNumber1}
        lastNumber={props.lastNumber}
      />
    </div>
  )
}

export default Comp1;