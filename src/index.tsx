import Reveal from 'reveal.js'
import { MDXProvider } from '@mdx-js/react'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'

// eslint-disable-next-line import/no-unresolved
import mdx from './typescript/slide*.mdx'

import React from 'react'
import ReactDOM from 'react-dom'

import 'prismjs/themes/prism-dark.css'
import 'reveal.js/css/reveal.css'
import 'reveal.js/css/theme/black.css'
import './index.scss'

const Code = ({
  children,
  className,
}: {
  children: string
  className: string
}) =>
  className ? (
    <Highlight
      {...defaultProps}
      code={children}
      language={className.replace(/language-/, '') as Language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <code className={className} style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </code>
      )}
    </Highlight>
  ) : (
    children
  )

const components = {
  code: Code,
}

ReactDOM.render(
  <MDXProvider components={components}>
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
