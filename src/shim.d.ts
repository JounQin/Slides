declare module '*.md' {
  const content: string
  export default content
}
declare module 'reveal.js' {
  const Reveal: {
    initialize: () => void
  }
  export default Reveal
}
