export const breakpoints = {
  sm: 240,
  md: 360,
  smd: 420,
  ms: 630,
  lg: 600,
  ld: 900,
  lmd: 920,
  xl: 1000,
  xL: 1114,
  l: 1440,
}

export const mediaQueries = (
  min: keyof typeof breakpoints | null,
  max: keyof typeof breakpoints | null
) => {
  return (style: TemplateStringsArray | String) => {
    const minWidth = min ? `(min-width: ${breakpoints[min]}px)` : ''
    const maxWidth = max ? `(max-width: ${breakpoints[max]}px)` : ''
    const combiner = min && max ? ' and ' : ''
    return `@media ${minWidth}${combiner}${maxWidth}  { ${style} }`
  }
}
