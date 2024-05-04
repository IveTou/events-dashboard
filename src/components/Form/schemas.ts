import { z } from 'zod';

const schema = z.object({
  title: z.string(),
  description: z.string(),
  location: z.string(),
  date: z.string().length(10),
  time:z.string().length(5)
})

const facade = [
  { id: 'title', name: 'Title' },
  { id: 'description', name: 'Description' },
  { id: 'date', name: 'Date' },
  { id: 'time', name: 'Time' },
  { id: 'location', name: 'Location' },
]

export { schema, facade }
