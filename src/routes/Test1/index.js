import { useState } from "react";

const Test1 = () => {
  const [message, setMessage] = useState('')

  const handleChange = (event) => {
    setMessage(event.target.value)
  }

  return(
    <div>
      <ul>
        <li>Please render the inputted value</li>
      </ul>
      <p>
        <b>User Input: </b> {message}
      </p>
      <input type="text" placeholder="input here" onChange={handleChange}/>
    </div>
  )
}

export default Test1;