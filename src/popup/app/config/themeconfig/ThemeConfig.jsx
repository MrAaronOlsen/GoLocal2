import React from 'react'
import styled from 'styled-components'

import { EventBus, Events } from 'event'

import styles from './styles.mod.scss'

const StyledTheme = styled.div(
  ({ active }) => `
    cursor: pointer;
    ${active && 'background-color: var(--surface-main-light);'}
  `,
)

export default function ThemeConfig({ getConfig, setConfig }) {
  const [theme, setTheme] = React.useState()

  React.useEffect(() => {
    getConfig((config) => {
      setTheme(config.getTheme())
    })
  }, [])

  function changeTheme(theme) {
    getConfig((config) => {
      config.setTheme(theme)

      setConfig(config, (config) => {
        EventBus.dispatch(Events.THEME_CHANGED, {
          theme: theme,
        })

        setTheme(config.getTheme())
      })
    })
  }

  return (
    <div className={styles.container}>
      <StyledTheme className={styles.entry} active={theme === 'light'}>
        <div onClick={() => changeTheme('light')}>Light</div>
      </StyledTheme>
      <StyledTheme className={styles.entry} active={theme === 'dark'}>
        <div onClick={() => changeTheme('dark')}>Dark</div>
      </StyledTheme>
    </div>
  )
}
