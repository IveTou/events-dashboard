import { useCallback, useState } from "react"
import Dialog from "../../components/Dialog"
import { FormFields } from "../../components/Form/types"
import { useEvents } from "../../context/Event"
import { ActionsEnum } from "../../enums/Actions"
import { DialogActionEnum, DialogConfig } from "../../enums/Dialog"
import { StyledView } from "./styled"
import EventsCalendar from "../../components/Calendar"
import { EventDetail } from "../../types/Event"

interface CalendarProps {
  action: (name: ActionsEnum, eventId?: string, fields?: FormFields) => void
}

export default function Calendar({ action }: CalendarProps) {
  const [selectedEvent, setSelectedEvent] =  useState<EventDetail>()
  const { events } = useEvents()

  const dialogHandler = useCallback((type: DialogActionEnum | ActionsEnum) => {
    if (selectedEvent) action(type as ActionsEnum, selectedEvent.id, selectedEvent)
    setSelectedEvent(undefined)
  }, [])

  const actionHandler = useCallback((fields?: FormFields) => {
    setSelectedEvent(fields)
  }, [])

  return (
    <StyledView>
      <h1>Calendar</h1>
      <EventsCalendar events={events} action={actionHandler}/>
      <Dialog
        text='Are you sure you want to delete this Event?'
        action={dialogHandler}
        isOpen={!!selectedEvent}
        showOptions={true}
      />
    </StyledView>
  )
}
