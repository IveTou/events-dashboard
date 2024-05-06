import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { FormFields } from '../Form/types'
import { EventDetail } from '../../types/Event'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { StyledCalendar } from './styled';

const localizer = momentLocalizer(moment)

interface EventsCalendarProps {
  events: EventDetail[]
  action?: (fields?: FormFields) => void
}

export default function EventsCalendar({ events, action }: EventsCalendarProps){
  const data = events.map((props) => ({
    ...props,
  }))
  return (
    <StyledCalendar>
      <Calendar
        localizer={localizer}
        events={data}
        startAccessor='start'
        endAccessor='end'
        style={{ height: 500, margin: '16px 16px 64px' }}
        onSelectEvent={action}
      />
    </StyledCalendar>
  )
}
