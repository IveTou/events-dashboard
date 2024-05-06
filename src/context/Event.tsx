import { ReactNode, createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"
import { EventDetail } from "../types/Event";
import { getStorageEvents, setStorageEvents } from "../services/localstorage/client";

type EventContextType = {
  events: EventDetail[]
  submitDetail: (fields: EventDetail) => void
  getDetails: (id: string) => EventDetail
  deleteDetail: (id: string) => boolean
}

const EventContext = createContext<EventContextType | undefined>(undefined);

interface EventProviderProps {
  children: ReactNode
}

export function EventProvider({ children }: EventProviderProps) {
  const [events, setEvents] = useState<{ [id: string]: EventDetail }>({})

  useEffect(() => {
    /* API fetch */
    const data = getStorageEvents()
    setEvents(data)
  }, [])

  const submitDetail = (fields: EventDetail) => {
    if (fields.id) {
      const data = {
        ...events,
        [fields.id]: fields
      }
      setEvents(data)
      setStorageEvents(data)
    } else {
      const uid = Date.now().toString()
      const data = {
        ...events,
        [uid]: {
          ...fields,
          id: uid
        }
      }
      setEvents(data)
      setStorageEvents(data)
    }
  }

  const deleteDetail = (id: string) => {
    const data = structuredClone(events)
    delete data[id]

    setEvents(data)
    setStorageEvents(data)
    return true
  }

  const getDetails = useCallback((id: string) => {
    return events[id]
  }, [events])


  const store = useMemo(() => {
    const sortedEvents = Object.values(events).sort((a, b) => {
      if(a.start > b.start) return -1
      if(a.start < b.start) return 1
      return 0
    })

    return {
      events: sortedEvents,
      submitDetail,
      getDetails,
      deleteDetail,
    }
  }, [events, getDetails])

  return <EventContext.Provider value={store}>{children}</EventContext.Provider>
}

export function useEvents(): EventContextType {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error('EventContext should be used within a EventProvider');
  }
  return context;
}
