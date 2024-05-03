import { ReactNode } from 'react'
import { createPortal } from 'react-dom';
import { useModal } from '@refinedev/core';
import Header from '../Header'
import Sidebar from '../Sidebar'
import Modal from '../Modal';


interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children } : LayoutProps) {
  const { show, close, visible } = useModal();

  const modal = visible && createPortal(<Modal close={close} />, document.body);

  const actionHandler = (name: string) => {
    console.log('Name:', name)
    show()
  }

  return (
    <>
      <aside><Sidebar action={actionHandler} /></aside>
      <main>
        <Header />
        {children}
      </main>
      {modal}
    </>
  )
}
