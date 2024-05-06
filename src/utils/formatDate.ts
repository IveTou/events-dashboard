export function dateStringToIso(value?: string) {
  if (!value) return

  try {
    const date = new Date(value)
    return date.toISOString()
  } catch {
    return
  }
}
