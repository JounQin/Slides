/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react'

const ColorMapper = {
  3: 'lightblue',
  4: 'lightgreen',
}

export const SectionTitle: React.FunctionComponent<{ level?: 3 | 4 }> = ({
  children,
  level = 3,
}) => {
  const Heading = ('h' + String(level)) as 'h3' | 'h4'
  return <Heading style={{ color: ColorMapper[level] }}>{children}</Heading>
}
