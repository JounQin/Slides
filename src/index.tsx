import Reveal from 'reveal.js'
import { MDXProvider } from '@mdx-js/react'

import { Code } from './components'
// eslint-disable-next-line import/no-unresolved
import mdx from './typescript/slide*.mdx'

import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
  <MDXProvider
    components={{
      code: Code,
    }}
  >
    <div className="slides">
      {Object.entries(mdx).map(([key, MDX]) => (
        <section key={key}>
          <MDX.default></MDX.default>
        </section>
      ))}
    </div>
  </MDXProvider>,
  document.querySelector('.reveal'),
)

Reveal.initialize({
  history: true,
})
