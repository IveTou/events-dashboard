export function getEvents() {
  try {
    const data  = JSON.parse(localStorage.getItem('events') || '')
    if(!data) throw new Error('Empty storage')
    return data
  } catch (error) {
    console.error('No data has been found', error)
    return []
  }
}

export function setEvents(events: any) {
  try {
    localStorage.setItem('events', JSON.stringify(events))
  } catch (error) {
    console.error('Storage error', error)
    throw new Error('Was not possible to store events')
  }
}
