import { Link, NavLink } from 'react-router-dom';
import { ActionsEnum } from '../../enums/Actons';

interface SideBarProps {
  action: (name: ActionsEnum, eventId?: string) => void
}

export default function Sidebar({ action }: SideBarProps) {
  return (
    <div>
      <h2>Menu</h2>
      <nav>
        <ul>
          <li><Link to='/list'>List</Link></li>
          <li><NavLink to='/calendar' >Calendar</NavLink></li>
          <li><button onClick={() => action(ActionsEnum.CREATE)}>Create</button></li>
          <li><button onClick={() => action(ActionsEnum.EDIT, '123')}>Edit</button></li>
          <li><button onClick={() => action(ActionsEnum.DETAILS)}>Details</button></li>
        </ul>
      </nav>
    </div>
  )
}
