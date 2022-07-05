import React from 'react'
import styled from 'styled-components'

import styles from './styles.mod.scss'

const Styled = styled.div(
  ({ color, size }) => `
    font-size: ${size || 'inherit'};
    color: ${color || 'var(--primary-variant)'};
  `,
)

export default function Gear({ color, size, ...props }) {
  return (
    <Styled className={styles.container} color={color} size={size} {...props} />
  )
}
