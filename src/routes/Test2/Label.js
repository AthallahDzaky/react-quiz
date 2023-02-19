import { css } from 'react-emotion';
import { useState } from "react";

const cssLabel = css({
  display: 'inline-block',
  margin: '4px 0px',
  padding: '2px 8px',
  backgroundColor: '#e0e0e0',
  borderRadius: 8,
  button: {
    backgroundColor: 'transparent',
    color: 'red',
    marginLeft: 4,
    fontSize: 22,
    padding: 0,
    border: 'none',
    outline: 'none',
    opacity: 0,
    cursor: 'pointer',
  }
})

const Label = (props) => {
  const [hovered, setHovered] = useState({opacity: 0})
  const handleDeleteButton = (event) => {
    props.setMessage("")
  }

  return (
    <span className={cssLabel}
      onMouseEnter={ e => {
        setHovered({opacity: 1});
      }}
      onMouseLeave={ e => {
        setHovered({opacity:0});
      }}
    >
      {props.message}
      <button type="button" onClick={handleDeleteButton} style={hovered}>⊗</button>
    </span>
  )
}

export default Label;
