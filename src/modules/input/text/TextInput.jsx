import React from 'react'
import styled from 'styled-components'

import * as styles from './styles.mod.scss'

const StyledInput = styled.input(
  ({ width, height }) => `
      width: ${width || '100%'};
      width: ${height || '100%'};
    `,
)

export default function TextInput({
  title,
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
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <StyledInput
        value={value || ''}
        name={name}
        placeholder={placeholder || ''}
        onChange={handleChange}
        type={'text'}
        autoComplete="off"
        readOnly={disable}
        className={styles.input}
        {...styleProps}
      />
    </div>

  )
}
