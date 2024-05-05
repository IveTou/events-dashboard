import { ReactNode } from "react"
import { StyledModal } from "./styled"

interface ModalProps {
  children?: ReactNode
  close: () => void
}

export default function Modal({ children, close }: ModalProps) {
  return (
    <StyledModal>
      <div><button onClick={close}>close</button></div>
      {children}
    </StyledModal>
  )
}
