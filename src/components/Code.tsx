import cn from 'classnames'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import React from 'react'

const LANGUAGE_REGEXP = /language-(?=[a-z]+)/

export const Code: React.FunctionComponent<{
  className?: string
}> = ({ children, className }) =>
  LANGUAGE_REGEXP.test(className!) ? (
    <Highlight
      {...defaultProps}
      code={children as string}
      language={className!.replace(LANGUAGE_REGEXP, '') as Language}
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
    <code className={className}>{children}</code>
  )

export const PreCode: React.FunctionComponent<{
  code: Uint8Array
  language: string
  className?: string
}> = ({ code, language = 'ts', className }) => (
  <pre>
    <Code className={cn('language-' + language, className)}>
      {String(code)}
    </Code>
  </pre>
)
