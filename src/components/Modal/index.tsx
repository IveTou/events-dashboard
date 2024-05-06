import { ReactNode } from "react"
import { StyledHeader, StyledModal } from "./styled"

interface ModalProps {
  children?: ReactNode
  close: () => void
}

export default function Modal({ children, close }: ModalProps) {
  return (
    <StyledModal>
      <StyledHeader>
        <button className='cancel' onClick={close}>close</button>
      </StyledHeader>
      {children}
    </StyledModal>
  )
}
