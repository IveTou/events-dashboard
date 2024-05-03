import { Link, NavLink } from 'react-router-dom';

interface SideBarProps {
  action: (name: string) => void
}

export default function Sidebar({ action }: SideBarProps) {
  return (
    <div>
      <h2>Menu</h2>
      <nav>
        <ul>
          <li><Link to='/list'>List</Link></li>
          <li><NavLink to='/calendar' >Calendar</NavLink></li>
          <li><button onClick={() => action('OPEN_MODAL')}>Action</button></li>
        </ul>
      </nav>
    </div>
  )
}
