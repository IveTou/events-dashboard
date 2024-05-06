import { ReactNode, useCallback, useState } from 'react'
import { createPortal } from 'react-dom';
import { useModal } from '@refinedev/core';
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Modal from '../components/Modal';
import Form from '../components/Form';
import { ActionsEnum } from '../enums/Actions';
import Details from '../components/Details';
import { useEvents } from '../context/Event';
import { Route, Routes } from 'react-router-dom';
import List from '../pages/List';
import Calendar from '../pages/Calendar';
import NotFound from '../pages/NotFound';
import { FormFields } from '../components/Form/types';
import { StyledMain, SyledLayout } from './styled';
import Footer from '../components/Footer';
import { EventDetail } from '../types/Event';
import Home from '../pages/Home';

export default function Layout() {
  const { show, close, visible } = useModal();
  const [modalContent, setModalContent] = useState<ReactNode>(null)
  const { submitDetail, getDetails, deleteDetail } = useEvents()

  const submitHandler = (fields: EventDetail) => {
    submitDetail(fields)
    close()
  }

  {/* I could open modal based on navigation data */}
  const actionHandler = useCallback((name: ActionsEnum, eventId?: string, fields?: FormFields) => {
    if (name === ActionsEnum.DELETE) {
      deleteDetail(eventId!)
      return
    }

    const contentMap: ReactNode = {
      CREATE: <Form submit={submitHandler} cancel={close} />,
      EDIT: <Form submit={submitHandler} cancel={close} id={eventId} fields={fields}/>,
      DETAILS: <Details {...getDetails(eventId!)}/>,
      DELETE: null
    }[name]

    setModalContent(contentMap)
    show()
  }, [getDetails])

  const modal = visible && createPortal(
    <Modal close={close}>
      {modalContent}
    </Modal>
    , document.body
  )

  return (
    <>
      <SyledLayout>
        <Header action={actionHandler} />
        <Sidebar action={actionHandler} />
        <StyledMain>
          {/* I could decouple Routes to an routes path */}
          <Routes>
            <Route
              path={'/'}
              element={<Home />}
              errorElement={<NotFound />}
            />
            <Route
              path={'/list'}
              element={<List action={actionHandler} />}
              errorElement={<NotFound />}
            />
            <Route
              path={'/calendar'}
              element={<Calendar action={actionHandler} />}
              errorElement={<NotFound />}
            />
          </Routes>
        </StyledMain>
      </SyledLayout>
      <Footer />
      {modal}
    </>
  )
}
