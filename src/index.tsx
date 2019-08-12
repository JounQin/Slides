import Reveal from 'reveal.js'
import { MDXProvider } from '@mdx-js/react'
import whyDidYouRender from '@welldone-software/why-did-you-render'

import * as components from './components'
// eslint-disable-next-line import/no-unresolved
import mdx from './typescript/slide*.mdx'

import React from 'react'
import ReactDOM from 'react-dom'

if (process.env.NODE_ENV === 'development') {
  whyDidYouRender(React, {
    include: [/.*/],
  })
}

ReactDOM.render(
  <MDXProvider components={components}>
    <div className="slides">
      {Object.entries(mdx).map(
        ([key, MDX]: [string, { default: React.ComponentType }]) => (
          <section key={key}>
            <MDX.default></MDX.default>
          </section>
        ),
      )}
    </div>
  </MDXProvider>,
  document.querySelector('.reveal'),
)

Reveal.initialize({
  history: true,
})
