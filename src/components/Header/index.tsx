import viteLogo from '/vite.svg'

export default function Header() {
  return (
    <header>
      <a href='https://vitejs.dev' target='_blank'>
        <img src={viteLogo} className='logo' alt='Vite logo' />
      </a>
      <span>A React Interactive Dashboard</span>
    </header>
  )
}
