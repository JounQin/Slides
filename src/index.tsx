import Reveal from 'reveal.js'

// eslint-disable-next-line import/no-unresolved
import mds from './typescript/slide*.md'

import React from 'react'
import ReactDOM from 'react-dom'

import 'reveal.js/css/reveal.css'
import 'reveal.js/css/theme/black.css'

ReactDOM.render(
  <div className="slides">
    {Object.entries(mds).map(([key, value]) => (
      <section key={key} dangerouslySetInnerHTML={{ __html: value }}></section>
    ))}
  </div>,
  document.querySelector('.reveal'),
)

Reveal.initialize()
