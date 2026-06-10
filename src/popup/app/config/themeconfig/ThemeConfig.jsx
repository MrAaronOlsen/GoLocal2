import React from 'react'

import { EventBus, Events } from 'event'
import { On } from 'icons'
import { Color } from 'theme'

import * as styles from './styles.mod.scss'

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
      <div className={styles.entry}>
        <div onClick={() => changeTheme('light')}>Light</div>{onIcon('light')}
      </div>
      <div className={styles.entry}>
        <div onClick={() => changeTheme('dark')}>Dark</div>{onIcon('dark')}
      </div>
    </div>
  )

  function onIcon(value) {
    return theme === value ? <On size='15px' color={Color.GREEN.getColor()} /> : null
  }
}
