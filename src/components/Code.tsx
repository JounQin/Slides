import Highlight, { defaultProps, Language } from 'prism-react-renderer'

import cn from 'classnames'
import React from 'react'

export const Code: React.FunctionComponent<{
  className?: string
}> = ({ children, className }) =>
  className ? (
    <Highlight
      {...defaultProps}
      code={children as string}
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
  className?: string
}> = ({ code, language, className }) => (
  <pre>
    <Code className={cn('language-' + language, className)}>
      {code.toString()}
    </Code>
  </pre>
)
