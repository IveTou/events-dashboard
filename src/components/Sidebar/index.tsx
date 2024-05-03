import { Link, NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div>
      <h2>Menu</h2>
      <nav>
        <ul>
          <li><Link to='/list'>List</Link></li>
          <li><NavLink to='/calendar' >Calendar</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}
