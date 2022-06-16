import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input(
  ({ width, height }) => `
      width: ${width || '100%'};
      height: ${height || '30px'};

      padding: 0px 10px 0px 10px;

      border: 1px solid #555;
      border-radius: 5px;

      outline: none;

      &:focus, &:focus-visible {
        outline: 1px solid #bbb;
      }
    `,
)

export default function TextInput({
  name,
  placeholder,
  value,
  onChange,
  styleProps,
}) {
  function handleChange(element) {
    if (element && element.currentTarget) {
      let content = element.currentTarget.value
      onChange(content, name)
    }
  }

  return (
    <StyledInput
      value={value || ''}
      name={name}
      placeholder={placeholder || ''}
      onChange={handleChange}
      type={'text'}
      autoComplete="off"
      {...styleProps}
    />
  )
}
