import React from 'react'
import { createGlobalStyle } from 'styled-components'

import { EventBus, Events } from 'event'

const GlobalStyle = createGlobalStyle(
  ({ primary, background, surface, error }) => `
    :root {
      --primary-main: ${primary.main};
      --primary-variant: ${primary.variant};
      --primary-on: ${primary.on};
      --primary-border: ${primary.border};

      --background-main: ${background.main};
      --background-on: ${background.on};

      --surface-main: ${surface.main};
      --surface-main-light: ${surface.mainLight};
      --surface-on: ${surface.on};

      --error-main: ${error.main};
      --error-on: ${error.on};
    }
`,
)

export function Theme() {
  const [theme, setTheme] = React.useState(themes.dark)

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
      variant: '#003c8f',
      on: '#ffffff',
      border: '#ababab',
    },
    background: {
      main: '#dfdfdf',
      on: '#000000',
    },
    surface: {
      main: '#efefef',
      mainLight: '#ffffff',
      on: '#000000',
    },
    error: {
      main: '#b00020',
      on: '#ffffff',
    },
  },

  dark: {
    primary: {
      main: '#2f343d',
      variant: '#003c8f',
      on: '#ffffff',
      border: '#808080',
    },
    background: {
      main: '#161c26',
      on: '#ffffff',
    },
    surface: {
      main: '#2f343d',
      mainLight: '#4f545d',
      on: '#ffffff',
    },
    error: {
      main: '#cf6679',
      on: '#000000',
    },
  },
}
