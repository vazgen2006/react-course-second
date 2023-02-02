import React from 'react'

const Input = (props) => {
  return (
    
      <input  value={props.value} type={props.type}  onChange = {props.onChange}></input>
    
  )
}

export default Input
