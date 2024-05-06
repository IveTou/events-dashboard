import { EventDetail } from "../../types/Event"
import { StyledDetails } from "./styled"

interface DetailsProps extends EventDetail {}

export default function Details({ title, description, start, end, location }: DetailsProps) {
  return (
    <StyledDetails>
      <h2>🎉 {title}</h2>
      <section>
        <strong>Starts: </strong>
        <p><time dateTime={start}>{start}</time></p>
        {end
          ? (
            <>
              <strong>Ends: </strong>
              <p><time dateTime={end}>{end}</time></p>
            </>
          ) : <p>All day event</p>
        }
        <strong>Where: </strong>
        <p>{location}</p>
      </section>
      <section>
        <h3>Event details</h3>
        <p>{description}</p>
      </section>
    </StyledDetails>
  )
}
