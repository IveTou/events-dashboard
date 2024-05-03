import { ReactNode } from "react"

interface ModalProps {
  children?: ReactNode
  close: () => void
}

export default function Modal({ children, close }: ModalProps) {
  return (
    <div>
      <div><button onClick={close}>CLOSE</button></div>
      {children}
    </div>
  )
}
