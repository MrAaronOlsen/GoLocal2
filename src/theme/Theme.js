import React from 'react'
import { createGlobalStyle } from 'styled-components'

import { EventBus, Events } from 'event'
import { ConfigStorage } from 'storage'

const GlobalStyle = createGlobalStyle(
  ({ primary, secondary, background, surface, foreground }) => `
    :root {
      --primary-main: ${primary.main};
      --primary-on: ${primary.on};
      --primary-border: ${primary.border};

      --secondary-main: ${secondary.main};
      --secondary-on: ${secondary.on};
      --secondary-border: ${secondary.border};

      --background-main: ${background.main};
      --background-on: ${background.on};
      --background-border: ${background.border};

      --surface-main: ${surface.main};
      --surface-on: ${surface.on};
      --surface-border: ${surface.border};

      --foreground-main: ${foreground.main};
      --foreground-on: ${foreground.on};
      --foreground-border: ${foreground.border};
    }
`,
)

const configStorage = new ConfigStorage()

export function Theme() {
  const [theme, setTheme] = React.useState(themes.light)

  React.useEffect(() => {
    configStorage.getConfig((config) => {
      console.log(config.toJson())
      const theme = themes[config.getTheme()]

      if (theme) {
        setTheme(theme)
      }
    })
  }, [])

  React.useEffect(() => {
    EventBus.on(Events.THEME_CHANGED, changeTheme)
    return () => EventBus.remove(Events.THEME_CHANGED, changeTheme)
  })

  const changeTheme = React.useCallback((data) => {
    let theme = data.detail.theme
    setTheme(themes[theme])
  })

  return <GlobalStyle {...theme} />
}

const themes = {
  light: {
    primary: {
      main: '#1565c0',
      on: '#ffffff',
      border: '#909090',
    },
    secondary: {
      main: '#1565c0',
      on: '#ffffff',
      border: '#909090',
    },
    background: {
      main: '#ffffff',
      on: '#000000',
      border: '#ffffff',
    },
    surface: {
      main: '#dedede',
      on: '#000000',
      border: '#dedede',
    },
    foreground: {
      main: '#ababab',
      on: '#000000',
      border: '#ababab',
    },
  },
  dark: {
    primary: {
      main: '#2f343d',
      on: '#ffffff',
      border: '#808080',
    },
    secondary: {
      main: '#1565c0',
      on: '#ffffff',
      border: '#808080',
    },
    background: {
      main: '#161c26',
      on: '#ffffff',
      border: '#808080',
    },
    surface: {
      main: '#2f343d',
      on: '#ffffff',
      border: '#808080',
    },
    foreground: {
      main: '#4f545d',
      on: '#ffffff',
      border: '#808080',
    },
  },
}
