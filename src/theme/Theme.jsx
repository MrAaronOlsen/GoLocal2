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

export default function Theme() {
  const [theme, setTheme] = React.useState(themes.light)

  React.useEffect(() => {
    configStorage.getConfig((config) => {
      const theme = themes[config.getTheme()]

      if (theme) {
        setTheme(theme)
      }
    })
  }, [])

  React.useEffect(() => {
    const changeTheme = (data) => {
      let theme = data.detail.theme
      setTheme(themes[theme])
    }

    EventBus.on(Events.THEME_CHANGED, changeTheme)
    return () => EventBus.remove(Events.THEME_CHANGED, changeTheme)
  }, [])

  return <GlobalStyle {...theme} />
}

const themes = {
  light: {
    primary: {
      main: '#9bd0fb',
      on: '#4b4b4b',
      border: '#d7d7d7',
    },
    secondary: {
      main: '#1565c0',
      on: '#4b4b4b',
      border: '#909090',
    },
    background: {
      main: '#ffffff',
      on: '#4b4b4b',
      border: '#ffffff',
    },
    surface: {
      main: '#dedede',
      on: '#4b4b4b',
      border: '#979696',
    },
    foreground: {
      main: '#ababab',
      on: '#4b4b4b',
      border: '#ababab',
    },
  },
  dark: {
    primary: {
      main: '#2f343d',
      on: '#b3b3b3',
      border: '#808080',
    },
    secondary: {
      main: '#1565c0',
      on: '#b3b3b3',
      border: '#808080',
    },
    background: {
      main: '#161c26',
      on: '#b3b3b3',
      border: '#808080',
    },
    surface: {
      main: '#2f343d',
      on: '#b3b3b3',
      border: '#808080',
    },
    foreground: {
      main: '#4f545d',
      on: '#b3b3b3',
      border: '#808080',
    },
  },
}
