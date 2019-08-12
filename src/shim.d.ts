declare module '*.mdx' {
  import React from 'react'
  const content: React.ComponentType
  export default content
}

declare module '@mdx-js/react' {
  import React from 'react'
  export const MDXProvider: React.ComponentType<{
    components: Record<
      string,
      React.ComponentType<{
        className?: string
      }>
    >
  }>
}

declare module 'reveal.js' {
  export interface RevealOptions {
    hash?: boolean
    history?: boolean
    overview?: boolean
  }

  export interface Reveal {
    initialize: (options?: RevealOptions) => void
    configure: (options?: RevealOptions) => void
    addEventListener: (
      event: string,
      handler: (event: {
        currentSlide: number
        indexh: number
        indexv: number
      }) => void,
    ) => void
    isReady: () => boolean
  }

  const Reveal: Reveal

  export default Reveal
}
