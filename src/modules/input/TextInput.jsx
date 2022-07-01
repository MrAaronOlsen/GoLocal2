import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input(
  ({ width, height }) => `
      width: ${width || '100%'};
      width: ${height || '100%'};

      margin: 1px;
      padding: 3px;

      &:focus, &:focus-visible {
        outline: none;
      }
    `,
)

export default function TextInput({
  name,
  placeholder,
  value,
  onChange,
  styleProps,
  disable,
}) {
  function handleChange(element) {
    if (onChange && element && element.currentTarget) {
      onChange(element.currentTarget.value, name)
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
      readOnly={disable}
      {...styleProps}
    />
  )
}
