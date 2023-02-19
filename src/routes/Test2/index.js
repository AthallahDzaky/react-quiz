import Input from "./Input";
import Label from "./Label";
import { useState } from "react";

const Test2 = () => {
  const [message, setMessage] = useState('')
  const handleChange = (input) => {
    setMessage(input)
  }

  return(
    <div>
      <ul>
        <li>Render user input value inside the label below</li>
        <li>show "close button" only when hovered, and clear the input value when clicked.</li>
      </ul>
      <p>
        <Label 
          message={message} 
          setMessage={handleChange}
        />
      </p>
      <Input 
        message={message} 
        setMessage={handleChange}
      />
    </div>
  )
}

export default Test2;