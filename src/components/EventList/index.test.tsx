import { render } from '../../test/test-utils'
import EventList from '.'

describe('#EventList', () => {
  describe('#index', () => {
    it('should render without errors [sanity check]', () => {
      render(<EventList events={[]} action={() => {}} />)
    })
  })

  describe('#ListItem', () => {
  })
})
