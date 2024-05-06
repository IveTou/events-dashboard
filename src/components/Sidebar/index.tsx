import { NavLink } from 'react-router-dom';
import { ActionsEnum } from '../../enums/Actions';
import { StyledSideBar } from './styled';

interface SideBarProps {
  action: (name: ActionsEnum, eventId?: string) => void
}

export default function Sidebar({ action }: SideBarProps) {
  return (
    <StyledSideBar>
      <div>
        <h2 className='text-xl font-medium text-#242424'>Chose your view</h2>
        <nav>
          <NavLink to='/list'>List</NavLink>
          <NavLink to='/calendar'>Calendar</NavLink>
        </nav>
      </div>
      <button onClick={() => action(ActionsEnum.CREATE)}>Create</button>
    </StyledSideBar>
  )
}
