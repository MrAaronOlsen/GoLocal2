# GoLocal2 — Project Conventions

## Import arrangement

Imports are organized into **four groups**, in this order, with a **single blank
line between groups** and **no blank lines within a group**:

1. **External** — third-party packages resolved from `node_modules`
   (e.g. `react`, `styled-components`, `short-uuid`).
2. **Aliased internal** — internal code modules referenced via a webpack alias:
   `button`, `config`, `event`, `icons`, `input`, `models`, `popup`, `scripts`,
   `storage`, `theme`. (Asset/style files are *not* here even if reached via an
   alias — see group 4.)
3. **Relative** — internal code modules referenced by a relative path
   (`./foo`, `../foo`).
4. **Styles & assets** — stylesheet imports (`*.scss`, `*.css`) and static-asset
   imports (images, fonts: `*.png`, `*.svg`, `*.woff`, `*.ttf`, …). This group
   is determined by *what* is imported, not how it's referenced — e.g.
   `import GoLocal from 'assets/live/bar_icon_128.png'` belongs here even though
   it uses the `assets` alias.

### Within a group
Sort lines alphabetically (case-insensitive) by the **module path** as written
— the string in the quotes, not the imported identifier. Relative paths that
start with `.` naturally sort before bare/aliased specifiers.

### Notes
- Omit a group entirely if a file has no imports for it (don't leave an empty
  blank line for a missing group).
- A group with a single import still gets its blank-line separation from
  adjacent groups.
- `React` must stay imported in every `.jsx` file: the Babel config uses
  `@babel/preset-react` with the **classic** JSX runtime, so JSX compiles to
  `React.createElement(...)` and `React` must be in scope.

### Example

```js
import React from 'react'
import styled from 'styled-components'

import { EventBus, Events } from 'event'
import { RefModel } from 'models'
import { Color } from 'theme'

import UrlConfig from './urlconfig/UrlConfig'

import * as styles from './styles.mod.scss'
import GoLocal from 'assets/live/bar_icon_128.png'
```
