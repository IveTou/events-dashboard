import { ReactNode, createContext, useContext, useMemo } from "react"
import { EventDetail } from "../types/Event";
import mock from "./mock";

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

  const submitDetail = (fields: EventDetail) => {
    if (fields.id) {
      console.log('ACTION_EDIT_EVENT', fields)
    } else {
      console.log('ACTION_CREATE_EVENT', fields)
    }
  }

  const deleteDetail = (id: string) => {
    const e: {[key: string]: EventDetail} = mock
    return true
  }

  const getDetails = (id: string) => {
    const e: {[key: string]: EventDetail} = mock
    return e[id]
  }

  const events: EventDetail[] = useMemo(() => {
    return Object.values(mock)
  }, [])

  const store = useMemo(() => {
    const sortedEvents = events.sort((a, b) => {
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
  }, [events])

  return <EventContext.Provider value={store}>{children}</EventContext.Provider>
}

export function useEvents(): EventContextType {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error('EventContext should be used within a EventProvider');
  }
  return context;
}
