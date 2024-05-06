import { z } from 'zod';

const schema = z.object({
  title: z.string().min(1),
  description: z.string().min(10),
  location: z.string().min(10),
  start: z.string().min(1, { message: 'Invalid date format'}).transform((str) => new Date(str)),
  end:z.string().min(1, { message: 'Invalid date format'}).transform((str) => new Date(str)),
})

const facade = [
  { id: 'title', name: 'Title', required: true },
  { id: 'description', name: 'Description', required: true },
  { id: 'start', name: 'Starts', required: true },
  { id: 'end', name: 'Ends', required: true },
  { id: 'location', name: 'Location', required: true },
]

export { schema, facade }
