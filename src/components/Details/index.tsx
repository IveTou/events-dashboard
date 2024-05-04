import { EventDetail } from "../../types/Event"

interface DetailsProps extends EventDetail {}

export default function Details({ title, description, date, time, location }: DetailsProps) {
  return (
    <article>
      <h2>{title}</h2>
      <section>
        <strong>When: </strong>
        <p><time dateTime={date}>{date}</time> at <time dateTime={time}>{time}</time></p>
        <strong>Where: </strong>
        <p>{location}</p>
      </section>
      <section>
        <h3>Event details</h3>
        <p>{description}</p>
      </section>
    </article>
  )
}
