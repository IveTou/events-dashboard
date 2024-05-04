import { ReactNode, useState } from 'react'
import { createPortal } from 'react-dom';
import { useModal } from '@refinedev/core';
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Modal from '../components/Modal';
import Form from '../components/Form';
import { ActionsEnum } from '../enums/Actons';
import Details from '../components/Details';
import { useEvents } from '../context/Event';

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children } : LayoutProps) {
  const { show, close, visible } = useModal();
  const [modalContent, setModalContent] = useState<ReactNode>(null)
  const { submit, getDetails } = useEvents()

  const actionHandler = (name: ActionsEnum, eventId?: string) => {
    const contentMap: ReactNode = {
      CREATE: <Form submit={submit} cancel={close} />,
      EDIT: <Form submit={submit} cancel={close} id={eventId} />,
      DETAILS: <Details {...getDetails(eventId!)}/>
    }[name]

    setModalContent(contentMap)
    show()
  }

  const modal = visible && createPortal(
    <Modal close={close}>
      {modalContent}
    </Modal>
    , document.body
  )

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
