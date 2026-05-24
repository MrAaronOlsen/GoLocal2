import React from 'react'
import styled from 'styled-components'

import * as styles from './styles.mod.scss'

import Icon from '../Icon'

export default function On({ color, size, ...props }) {
  return (
    <Icon color={'#7ac341'} size={size} {...props}>
      <div className={styles.container}/>
    </Icon>
  )
}
