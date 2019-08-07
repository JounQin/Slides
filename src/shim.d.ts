declare module '*.mdx' {
  import { ComponentType } from 'react'
  const content: ComponentType
  export default content
}

declare module '@mdx-js/react' {
  import { ComponentType } from 'react'
  export const MDXProvider: ComponentType<{
    components: Record<
      string,
      ComponentType<{
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
