import { useEffect, useState } from 'react'
import { facade, schema } from './schemas'
import { EventDetail } from '../../types/Event'
import { FormFields } from './types'
import { StyledButtons, StyledInput, StyledModal } from './styled'

interface FormProps {
  id?: string
  cancel: () => void
  submit: (fields: EventDetail) => void
  fields?: FormFields
}

const INITIAL_FORM_DATA: FormFields = {
  title: '',
  time: '',
  date: '',
  description: '',
  location: ''
}

export default function Form({ cancel, submit, id, fields }: FormProps) {
  const [errors, setErrors] = useState<FormFields>()
  const [formData, setFormData] = useState<FormFields>(INITIAL_FORM_DATA)

  useEffect(() => {
    if (fields) setFormData(fields)
  }, [fields])

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
    <StyledModal>
      <h2>{id ? 'Edit Event' : 'Create an Event'}</h2>
      <div>
        {facade.map(({ id, name }) => (
          <StyledInput key={id}>
            <label htmlFor={id}>{name}</label>
            <input
              value={formData && formData[id as keyof FormFields]}
              onChange={e => setFormData(prev => ({ ...prev, [id]: e.target.value }))}
            />
            {errors  && <span>{errors[id as keyof FormFields]}</span>}
          </StyledInput>
        ))}
        <StyledButtons>
          <button onClick={cancel}>Cancel</button>
          <button onClick={handleSubmit}>Submit</button>
        </StyledButtons>
      </div>
    </StyledModal>
  )
}
