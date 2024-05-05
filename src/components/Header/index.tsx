import { Link } from 'react-router-dom'
import { StyledHeader, StyledHeading, StyledIcon, StyledNav } from './styled'
import { ActionsEnum } from '../../enums/Actions'

interface HeaderProps {
  action: (name: ActionsEnum, eventId?: string) => void
}

export default function Header({ action }: HeaderProps) {
  return (
    <StyledHeader>
      <StyledHeading>
        <StyledIcon>🎉</StyledIcon>
        <span>Event Dashboard</span>
      </StyledHeading>
      <StyledNav>
        <div>
          <Link to='/list'>List</Link>|
          <Link to='/calendar' >Calendar</Link>
        </div>
        <button onClick={() => action(ActionsEnum.CREATE)}>Create</button>
      </StyledNav>
    </StyledHeader>
  )
}
