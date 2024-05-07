import { DateTime } from 'luxon'
import { EventDetail } from "../../types/Event"
import { StyledDetails } from "./styled"

interface DetailsProps extends EventDetail {}

export default function Details({
  title,
  description,
  start,
  end,
  location
}: DetailsProps) {
  return (
    <StyledDetails>
      <h2>🎉 {title}</h2>
      <section>
        <div>
          <span>
            <strong>Starts: </strong>
            <time dateTime={start}>
              {DateTime.fromISO(start).setLocale('us').toFormat('yyyy LLL dd')}
              </time>
          </span>
          <span>
            {end
              ? (
                <>
                  <strong>Ends: </strong>
                  <time dateTime={end}>{DateTime.fromISO(end).setLocale('us').toFormat('yyyy LLL dd')}</time>
                </>
              ) : <p>All day event</p>
            }
          </span>
        </div>
        <strong>Where: </strong>
        <p>{location}</p>
      </section>
      <section>
        <h3>Event description</h3>
        <p>{description}</p>
      </section>
    </StyledDetails>
  )
}
