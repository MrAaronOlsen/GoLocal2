import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle(
  ({ primary, background, surface, error }) => `
    :root {
      --primary-main: ${primary.main};
      --primary-variant: ${primary.variant};
      --primary-on: ${primary.on};
      --primary-border: ${primary.border};

      --background-main: ${background.main};
      --background-on: ${background.on};

      --surface-main: ${surface.main};
      --surface-on: ${surface.on};

      --error-main: ${error.main};
      --error-on: ${error.on};
    }
`,
)

export const light = {
  primary: {
    main: '#1565c0',
    variant: '#003c8f',
    on: '#ffffff',
    border: '#ababab',
  },
  background: {
    main: '#efefef',
    on: '#000000',
  },
  surface: {
    main: '#ffffff',
    on: '#000000',
  },
  error: {
    main: '#b00020',
    on: '#ffffff',
  },
}

export const dark = {
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
    on: '#ffffff',
  },
  error: {
    main: '#cf6679',
    on: '#000000',
  },
}
