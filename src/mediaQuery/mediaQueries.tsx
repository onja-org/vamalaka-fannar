export const breakPoints = {
  sm: 240,
  md: 360,
  lg: 600,
  ld: 900,
  xl: 1000,
}

export const mediaQueries = (
  min: keyof typeof breakPoints | null,
  max: keyof typeof breakPoints | null
) => {
  return (style: TemplateStringsArray | String) => {
    const minWidth = min ? `(min-width: ${breakPoints[min]}px)` : ''
    const maxWidth = max ? `(max-width: ${breakPoints[max]}px)` : ''
    const combiner = min && max ? ' and ' : ''
    return `@media ${minWidth}${combiner}${maxWidth}  { ${style} }`
  }
}
