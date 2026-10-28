export const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

export const clamp01 = (value) => clamp(value, 0, 1)

export const smoothstep = (from, to, value) => {
  const t = clamp01((value - from) / (to - from))
  return t * t * (3 - 2 * t)
}
