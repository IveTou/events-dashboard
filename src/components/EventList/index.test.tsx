import { fireEvent, render, screen } from '../../test/test-utils'
import EventList from '.'
import eventsMock from '../../test/__ mocks __/events-mock'
import ListItem from './ListItem'
import { ActionsEnum } from '../../enums/Actions'

describe('#EventList', () => {
  const mockAction = jest.fn(() => null)

  describe('#index', () => {
    it('should render empty state for empty list', () => {
      render(<EventList events={[]} action={() => {}} />)

      expect(screen.getByText('Ops! Something went wrong'))
      expect(screen.getByText('There is no events created yet. How about create some?'))
    })

    it('should render list of items', () => {
      const events = Object.values(eventsMock)
      render(<EventList events={events} action={() => {}} />)

      expect(screen.getByTestId('event-list')).toBeInTheDocument()
      expect(screen.getByTestId('event-list').childElementCount).toBe(events.length)
    })
  })

  describe('#ListItem', () => {
    const event = eventsMock['1']

    it('should render component fields', () => {
      render(<ListItem event={event} action={() => {}} />)

      expect(screen.getByText('Um'))
      expect(screen.getByText('2024 mai. 03'))
      expect(document.querySelector('[data-icon="eye"]')).toBeVisible()
      expect(document.querySelector('[data-icon="pen-to-square"]')).toBeVisible()
      expect(document.querySelector('[data-icon="trash-can"]')).toBeVisible()
    })

    it('should call action functions', () => {
      render(<ListItem event={event} action={mockAction} />)

      const eyeButton = document.querySelector('[data-icon="eye"]')
      const editButton = document.querySelector('[data-icon="pen-to-square"]')
      const deleteButton = document.querySelector('[data-icon="trash-can"]')

      expect(eyeButton).toBeVisible()
      expect(editButton).toBeVisible()
      expect(deleteButton).toBeVisible()

      fireEvent.click(eyeButton!)
      fireEvent.click(editButton!)
      fireEvent.click(deleteButton!)

      expect(mockAction).toHaveBeenNthCalledWith(1,  ActionsEnum.DETAILS, event.id)
      expect(mockAction).toHaveBeenNthCalledWith(2,  ActionsEnum.EDIT, event.id, event)
      expect(mockAction).toHaveBeenNthCalledWith(3,  ActionsEnum.DELETE, event.id, event)
    })
  })
})
