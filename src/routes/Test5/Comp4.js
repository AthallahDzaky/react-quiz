import { useContext } from 'react';
import { MyNumberContext, MyNumberContext2 } from "./index";
import { cssWrapper, cssModalRight } from './style';

const Comp4 = (/* NO PROPS ALLOWED */) => {

  const {myNumber, setMyNumber} = useContext(MyNumberContext)
  
  return(
    <>
      <div className={cssWrapper}>
        <div className={cssModalRight}>
          Input Modal
          <button type="button">⊗</button>
        </div>
          <input id="mynumber2" type="text" placeholder="input mynumber2" value={myNumber} onChange={(event) => setMyNumber(event.target.value)}></input>
      </div>
    </>
  )
}

export default Comp4;