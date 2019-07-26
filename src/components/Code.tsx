import Highlight, { defaultProps, Language } from 'prism-react-renderer'

import React from 'react'

export const Code: React.FunctionComponent<{
  children: string
  className: string
}> = ({ children, className }) =>
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
    <>{children}</>
  )

export const PreCode: React.FunctionComponent<{
  code: string
  language: string
}> = ({ code, language }) => (
  <pre>
    <Code className={'language-' + language}>{code.toString()}</Code>
  </pre>
)
