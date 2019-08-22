import Reveal from 'reveal.js'
import { MDXProvider } from '@mdx-js/react'
import whyDidYouRender from '@welldone-software/why-did-you-render'
import React from 'react'
import ReactDOM from 'react-dom'

import * as components from './components'
// eslint-disable-next-line import/no-unresolved
import mdx from './typescript/slide*.mdx'

if (process.env.NODE_ENV === 'development') {
  whyDidYouRender(React, {
    include: [/.*/],
  })
}

const { GitHubBadge } = components

ReactDOM.render(
  <MDXProvider components={components}>
    <div className="slides">
      {Object.entries(mdx).map(
        ([key, Mdx]: [string, { default: React.ComponentType }]) => (
          <section key={key}>
            <Mdx.default></Mdx.default>
          </section>
        ),
      )}
    </div>
    <GitHubBadge slug="JounQin/Slides" fill="white" />
  </MDXProvider>,
  document.querySelector('.reveal'),
)

Reveal.initialize({
  history: true,
})
