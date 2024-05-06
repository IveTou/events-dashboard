import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { FormFields } from '../Form/types'
import { EventDetail } from '../../types/Event'
import 'react-big-calendar/lib/css/react-big-calendar.css';


const localizer = momentLocalizer(moment)

interface EventsCalendarProps {
  events: EventDetail[]
  action?: (fields?: FormFields) => void
}

export default function EventsCalendar({ events, action }: EventsCalendarProps){
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor='start'
        endAccessor='end'
        style={{ height: 500 }}
        onSelectEvent={action}
      />
    </div>
  )
}
