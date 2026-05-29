import React from 'react'
import styled from 'styled-components'

const Styled = styled.div(
  ({ color, size }) => `
    font-family: 'golocal' !important;
  
    cursor: pointer;

    font-size: ${size || 'inherit'};
    color: ${color || 'var(--surface-on)'};
  `,
)

export default function Gear({ icon, color, size, ...props }) {
  return (
    <Styled color={color} size={size} {...props} />
  )
}
