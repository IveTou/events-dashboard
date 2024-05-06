import { EventDetail } from "../../types/Event"

export function getStorageEvents(): { [id: string]: EventDetail } {
  try {
    const data  = JSON.parse(localStorage.getItem('events') || '')
    if(!data) throw new Error('Empty storage')
    return data
  } catch (error) {
    console.error('No data has been found', error)
    return {}
  }
}

export function setStorageEvents(events: { [id: string]: EventDetail }) {
  try {
    localStorage.setItem('events', JSON.stringify(events))
  } catch (error) {
    console.error('Storage error', error)
    throw new Error('Was not possible to store events')
  }
}
