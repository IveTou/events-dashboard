import { useEffect, useState } from "react"
import { DialogAction } from "../../enums/Dialog"
import { StyledDialog } from "./styled"

interface DialogProps {
  action: (type: DialogAction) => void
  text: string
  isOpen?: boolean
}

export default function Dialog({ action, text, isOpen = false }: DialogProps) {
  const [open, setOpen] = useState<boolean>(isOpen)

  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])

  const actionHandler = (type: DialogAction) => {
    action(type)
    setOpen(false)
  }

  return  (
    <StyledDialog open={open}>
      <p>{text}</p>
      <footer>
        <button onClick={() => actionHandler(DialogAction.CANCEL)}>Cancel</button>
        <button onClick={() => actionHandler(DialogAction.CONFIRM)}>Confirm</button>
      </footer>
    </StyledDialog>)
}
