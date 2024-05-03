import { ReactNode, createContext, useContext, useMemo } from "react"

type EventContextType = {
  events: object
}

const EventContext = createContext<EventContextType | undefined>(undefined);

interface EventProviderProps {
  children: ReactNode
}

export function EventProvider({ children }: EventProviderProps) {

  const store = useMemo(() => {
    return {
      events: []
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
