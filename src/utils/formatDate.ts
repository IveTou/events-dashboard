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

export function dateToShortIso(date?: Date | string) {
  if (!date || !(date instanceof Date)) return ''
  try {
    return DateTime.fromJSDate(date).toFormat("yyyy-MM-dd'T'T")
  } catch {
    return ''
  }
}

export function assertDate(value: string) {
  return Date.parse(value)
}
