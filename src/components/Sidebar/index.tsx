import { Link } from 'react-router-dom';
import { ActionsEnum } from '../../enums/Actions';
import { StyledSideBar } from './styled';

interface SideBarProps {
  action: (name: ActionsEnum, eventId?: string) => void
}

export default function Sidebar({ action }: SideBarProps) {
  return (
    <StyledSideBar>
      <h2>Menu</h2>
      <nav>
        <ul>
          <li><Link to='/list'>List</Link></li>
          <li><Link to='/calendar' >Calendar</Link></li>
          <li><button onClick={() => action(ActionsEnum.CREATE)}>Create</button></li>
          <li><button onClick={() => action(ActionsEnum.EDIT, '123')}>Edit</button></li>
          <li><button onClick={() => action(ActionsEnum.DETAILS)}>Details</button></li>
        </ul>
      </nav>
    </StyledSideBar>
  )
}
