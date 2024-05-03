import { ReactNode } from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'


interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children } : LayoutProps) {
  return (
    <>
      <aside><Sidebar /></aside>
      <main>
        <Header />
        {children}
      </main>
    </>
  )
}
