const Input = (props) => {
  const handleChange = (event) => {
    props.setMessage(event.target.value)
  }

  return <input type="text" placeholder="input here" value={props.message} onChange={handleChange} />
}

export default Input;
