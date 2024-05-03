import { FormEvent, useState } from 'react'
import { facade, schema } from './schemas'

type FormFields = {
  title: string
  description: string
  date: string
  time: string
  id: string
}

interface FormProps {
  cancel?: () => void
  submit?: (fields?: FormFields) => void
  fields?: FormFields
}

export default function Form({ cancel, submit, fields }: FormProps) {
  const [errors, setErrors] = useState<FormFields | undefined>()
  const [formData, setFormData] = useState<FormFields | undefined>(fields)

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
      if(submit) submit(formData)
    }
  }

  return (
    <>
      <h1>Create an Event</h1>
      <form onSubmit={handleSubmit}>
        {facade.map(({ id, name }) => (
          <div>
            <label htmlFor={id}>{name}</label>
            <input value={formData && formData[id as keyof FormFields]} />
            {errors  && <span>{errors[id as keyof FormFields]}</span>}
          </div>
        ))}
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={cancel}>Cancel</button>
      </form>
    </>
  )
}
