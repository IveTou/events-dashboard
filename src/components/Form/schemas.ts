import { z } from 'zod';

const schema = z.object({
  title: z.string(),
  description: z.string(),
  location: z.string(),
  start: z.date(),
  end:z.date().optional(),
})

const facade = [
  { id: 'title', name: 'Title' },
  { id: 'description', name: 'Description' },
  { id: 'start', name: 'Starts' },
  { id: 'end', name: 'Ends' },
  { id: 'location', name: 'Location' },
]

export { schema, facade }
