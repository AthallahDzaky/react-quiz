import { useRef } from "react";

const Test3 = () => {
  const refTextFocus = useRef(null)
  
  const handleClickFocus = () => {
    refTextFocus.current.focus()
  }

  return(
    <div>
      <ul>
        <li>Please focus to the text field when user click the focus button</li>
      </ul>
      <p>
        <button type="button" onClick={handleClickFocus}>Focus Text Field</button>
      </p>
      <input type="text" ref={refTextFocus} placeholder="focus me"/>
    </div>
  )
}

export default Test3;