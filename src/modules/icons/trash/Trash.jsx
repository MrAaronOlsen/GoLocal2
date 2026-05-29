import React from 'react'

import Icon from '../Icon'

import * as styles from './styles.mod.scss'

export default function Trash({ color, size, ...props }) {
  return (
    <Icon color={color} size={size} {...props}>
      <div className={styles.container} />
    </Icon>
  )
}
