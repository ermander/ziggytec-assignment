import React from 'react'

export default function Input(props) {
  return (
    <div data-testid="formInput" className="formInput">
      {props.type === 'number' ? (
        <input
          name={props.name}
          type={props.type}
          placeholder={props.placeholder}
          min="0"
        />
      ) : (
        <input
          name={props.name}
          type={props.type}
          placeholder={props.placeholder}
        />
      )}
    </div>
  )
}
