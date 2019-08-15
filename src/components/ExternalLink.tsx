import React from 'react'

export type ExternalLinkProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  'target' | 'rel'
>

export const ExternalLink: React.FunctionComponent<ExternalLinkProps> = ({
  children,
  href,
  ...props
}) => (
  <a
    {...props}
    href={href || undefined}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
)
