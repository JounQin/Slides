import React from 'react'

export const SubTitle: React.FunctionComponent<{ level?: '4' | '5' }> = ({
  children,
  level = '4',
}) => {
  const Heading = ('h' + level) as 'h4' | 'h5'
  return <Heading style={{ color: 'gray' }}>{children}</Heading>
}
