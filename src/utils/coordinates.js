const pad = (n) => String(n).padStart(2, '0')

export const formatRa = (hours) => {
  const total = Math.round(hours * 3600) % (24 * 3600)
  const h = Math.floor(total / 3600)
  const m = Math.floor((total % 3600) / 60)
  return `${pad(h)}h ${pad(m)}m ${pad(total % 60)}s`
}

export const formatDec = (degrees) => {
  const sign = degrees < 0 ? '−' : '+'
  const total = Math.round(Math.abs(degrees) * 3600)
  const d = Math.floor(total / 3600)
  const m = Math.floor((total % 3600) / 60)
  return `${sign}${pad(d)}° ${pad(m)}′ ${pad(total % 60)}″`
}
