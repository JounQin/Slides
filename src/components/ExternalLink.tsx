import React from 'react'

export const ExternalLink: React.FunctionComponent<
  React.AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ children, href, ...props }) => (
  <a
    {...props}
    href={href || undefined}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
)
