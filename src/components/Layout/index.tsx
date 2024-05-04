import { ReactNode } from 'react'
import { createPortal } from 'react-dom';
import { useModal } from '@refinedev/core';
import Header from '../Header'
import Sidebar from '../Sidebar'
import Modal from '../Modal';
import Form from '../Form';
import { FormFields } from '../Form/types';


interface LayoutProps {
  children: ReactNode
}

const INITIAL_FORM_DATA: FormFields = {
  title: '',
  time: '',
  date: '',
  description: '',
}

export default function Layout({ children } : LayoutProps) {
  const { show, close, visible } = useModal();

  const submitHandler = (fields: FormFields) => {
    console.log('FIELDS', fields)
  }

  const modal = visible && createPortal(
    <Modal close={close}>
      <Form
        fields={INITIAL_FORM_DATA}
        submit={submitHandler}
        cancel={close}
      />
    </Modal>
    , document.body
  )

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
