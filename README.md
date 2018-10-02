# react-super-footer

> A library that adds makes sure that your footer isn&#x27;t shown before content has loaded.

[![NPM](https://img.shields.io/npm/v/react-super-footer.svg)](https://www.npmjs.com/package/react-super-footer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-super-footer
```

## Usage

```jsx
import React, { Component } from 'react'

import SuperFooter from 'react-super-footer'

class Example extends Component {
  render () {
    return (
      <SuperFooter/>
    )
  }
}
```

| Property  | Default       | Required  | Description  |
|----------:|--------------:|----------:|----------:|
| lines     | 2             |     false |     number of lines to render |
| height    | 14            |     false |     height of lines in pixels |
| dynamic   | false         |     false |     if true, dynamically renders lines until the window height is reached  |

## License

MIT © [snrn-Pontus](https://github.com/snrn-Pontus)
