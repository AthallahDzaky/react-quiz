import { useState } from "react";

const Input = ({onClick}) => {
  const [ search , setSearch] = useState("")

  const handleClick = (e) => {
    e.preventDefault();
    onClick(search);
  }

  return (
    <form>
      <input type="text" placeholder="search" value={search} onChange={(event) => {setSearch(event.target.value)}} />
      <button type="submit" onClick={handleClick}>🔍</button>
    </form>
  )
}

export default Input;
