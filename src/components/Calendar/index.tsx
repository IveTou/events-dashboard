import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { EventDetail } from '../../types/Event'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { StyledCalendar } from './styled';
import EmptyState from '../EmptyState';

const localizer = momentLocalizer(moment)

interface EventsCalendarProps {
  events: EventDetail[]
  action?: (fields?: EventDetail) => void
}

export default function EventsCalendar({ events, action }: EventsCalendarProps){
  const data = events.map((props) => ({
    ...props,
    start: new Date(props.start),
    end: new Date(props.end),
  }))

  if(!events.length) {
    return <EmptyState />
  }

  return (
    <StyledCalendar>
      <Calendar
        localizer={localizer}
        events={data}
        startAccessor='start'
        endAccessor='end'
        style={{ height: 500, margin: '16px 16px 64px' }}
        onSelectEvent={
          ({ title, description, location, id, start, end }) => action && action(
          {
            title,
            description,
            location,
            id,
            start: start.toISOString(),
            end: end.toISOString()
          }
        )}
      />
    </StyledCalendar>
  )
}
