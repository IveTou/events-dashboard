import { Link } from 'react-router-dom';
import { ActionsEnum } from '../../enums/Actions';
import { StyledSideBar } from './styled';

interface SideBarProps {
  action: (name: ActionsEnum, eventId?: string) => void
}

export default function Sidebar({ action }: SideBarProps) {
  return (
    <StyledSideBar>
      <div>
        <h2 className='text-xl font-medium text-black'>Chose your view</h2>
        <nav>
          <ul>
            <li><Link to='/list'>List</Link></li>
            <li><Link to='/calendar' >Calendar</Link></li>
          </ul>
        </nav>
      </div>
      <button onClick={() => action(ActionsEnum.CREATE)}>Create</button>
    </StyledSideBar>
  )
}
