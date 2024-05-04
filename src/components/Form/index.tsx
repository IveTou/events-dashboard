import { useState } from 'react'
import { facade, schema } from './schemas'
import { EventDetail } from '../../types/Event'

type FormFields = Omit<EventDetail, 'id'>
interface FormProps {
  id?: string
  cancel: () => void
  submit: (fields: EventDetail) => void
}

const INITIAL_FORM_DATA: FormFields = {
  title: '',
  time: '',
  date: '',
  description: '',
  location: ''
}

export default function Form({ cancel, submit, id }: FormProps) {
  const [errors, setErrors] = useState<FormFields>()
  const [formData, setFormData] = useState<FormFields>(INITIAL_FORM_DATA)

  const handleSubmit = () => {
    const result = schema.safeParse(formData)
    if (!result.success) {
      const { errors } = result.error;
      const errorMapping = errors.reduce((acc, { path, message }) => ({
        ...acc,
        [path[0]]: message,
      }), {}) as FormFields
      setErrors(errorMapping)
    } else {
      setErrors(undefined)
      submit({ ...formData, id })
    }
  }

  return (
    <>
      <h1>{id ? 'Edit Event' : 'Create an Event'}</h1>
      <div>
        {facade.map(({ id, name }) => (
          <div>
            <label htmlFor={id}>{name}</label>
            <input
              value={formData && formData[id as keyof FormFields]}
              onChange={e => setFormData(prev => ({ ...prev, [id]: e.target.value }))}
            />
            {errors  && <span>{errors[id as keyof FormFields]}</span>}
          </div>
        ))}
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={cancel}>Cancel</button>
      </div>
    </>
  )
}
