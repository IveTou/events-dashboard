import { ReactNode, createContext, useContext, useMemo } from "react"
import { EventDetail } from "../types/Event";

type EventContextType = {
  events: EventDetail[]
  submit: (fields: EventDetail) => void
  getDetails: (id: string) => EventDetail
}

const EventContext = createContext<EventContextType | undefined>(undefined);

interface EventProviderProps {
  children: ReactNode
}

export function EventProvider({ children }: EventProviderProps) {

  const submit = (fields: EventDetail) => {
    if (fields.id) {
      console.log('EDIT_EVENT')
    } else {
      console.log('CREATE_EVENT')
    }
  }

  const getDetails = (id: string) => {
    const DETAILS: EventDetail = {
      title: 'Crazy 8',
      description: 'Lorem ipsum lorem lorem',
      date: '2014-08-09',
      time: '00:30',
      location: 'Lorem ipsum lorem lorem',
    }

    return DETAILS
  }

  const store = useMemo(() => {
    return {
      events: [],
      submit,
      getDetails,
    }
  }, [])

  return <EventContext.Provider value={store}>{children}</EventContext.Provider>
}

export function useEvents(): EventContextType {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error('EventContext should be used within a EventProvider');
  }
  return context;
}
