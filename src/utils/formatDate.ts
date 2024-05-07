import { DateTime } from 'luxon'

export function dateStringToIso(value?: string) {
  if (!value) return

  try {
    const date = new Date(value)
    return date.toISOString()
  } catch {
    return
  }
}

export function dateToShortIso(date?: Date) {
  if (!date) return ''

  try {
    return DateTime.fromJSDate(date).toFormat("yyyy-mm-dd'T'T")
  } catch {
    return ''
  }
}
