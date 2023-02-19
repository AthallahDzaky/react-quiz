const Input = (props) => {
  const handleInputSearch = (event) => {
    props.setSearch(event.target.value)
  }

  const _handleOnSubmit = (event) => {
    event.preventDefault()
    props.triggerSearchProcess(props.search)
  }

  return (
    <form onSubmit={_handleOnSubmit}>
      <input type="text" placeholder="search" onChange={handleInputSearch} value={props.search}/>
      <button type="submit">🔍</button>
    </form>
  )
}

export default Input;
