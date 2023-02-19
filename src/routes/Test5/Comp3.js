import { cssWrapper } from "./style";

import { useContext, useState } from "react";
import Comp4 from "./Comp4";
import { MyNumberContext, MyNumberContext2 } from "./index";

const Comp3 = (/* NO PROPS ALLOWED */) => {
  const [ showModal, setShowModal ] = useState(false);
  const handleOnclickModal = (_) => {
    setShowModal(!showModal)
  }

  const {myNumber, setMyNumber} = useContext(MyNumberContext)

  return(
    <>
      <div className={cssWrapper}>The Inputted Value is: {myNumber}*</div>
      <button type="button" onClick={handleOnclickModal}>Show Modal</button>
      {showModal && <Comp4/>}
    </>
  )
}

export default Comp3;