import { ReactNode, useState } from 'react'
import { createPortal } from 'react-dom';
import { useModal } from '@refinedev/core';
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Modal from '../components/Modal';
import Form from '../components/Form';
import { FormFields } from '../components/Form/types';
import { ActionsEnum } from '../enums/Actons';

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children } : LayoutProps) {
  const { show, close, visible } = useModal();
  const [modalContent, setModalContent] = useState<ReactNode>(null)

  const submitHandler = (fields: FormFields) => {
    console.log('FIELDS', fields)
  }


  const actionHandler = (name: ActionsEnum, eventId?: string) => {
    const contentMap: ReactNode = {
      CREATE: <Form submit={submitHandler} cancel={close} />,
      EDIT: <Form submit={submitHandler} cancel={close} id={eventId} />,
      DETAILS: <div>Hello</div>
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
