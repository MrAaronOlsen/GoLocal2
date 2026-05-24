import React from 'react'
import styled from 'styled-components'
import * as styles from './styles.mod.scss'

const StyledButton = styled.div(
  ({ width, height }) => `
      width: ${width || 'auto'};
      width: ${height || 'auto'};
    `,
)

export default function Button({
  text,
  onClick,
  styleProps,
}) {

  return (
    <StyledButton
      className={styles.container}
      onClick={onClick}
      {...styleProps}
    >{text}</StyledButton>
  )
}
