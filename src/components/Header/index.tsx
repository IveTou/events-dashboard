import { NavLink } from 'react-router-dom'
import { StyledHeader, StyledHeading, StyledIcon, StyledNav } from './styled'
import { ActionsEnum } from '../../enums/Actions'

interface HeaderProps {
  action: (name: ActionsEnum, eventId?: string) => void
}

export default function Header({ action }: HeaderProps) {
  return (
    <StyledHeader>
      <StyledHeading>
        <NavLink to='/'>
          <StyledIcon>🎉</StyledIcon>
          <span>Event Dashboard</span>
        </NavLink>
      </StyledHeading>
      <StyledNav>
        <nav>
          <NavLink to='/list'>List</NavLink>|
          <NavLink to='/calendar' >Calendar</NavLink>
        </nav>
        <div>
          <button onClick={() => action(ActionsEnum.CREATE)}>Create</button>
        </div>
      </StyledNav>
    </StyledHeader>
  )
}
