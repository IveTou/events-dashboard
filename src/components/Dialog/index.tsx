import { useEffect, useState } from "react"
import { DialogActionEnum } from "../../enums/Dialog"
import { StyledDialog } from "./styled"
interface DialogProps {
  action: (type: DialogActionEnum) => void
  text?: string
  isOpen?: boolean
  showOptions?: boolean
}

export default function Dialog({ action, text, isOpen = false, showOptions}: DialogProps) {
  const [open, setOpen] = useState<boolean>(isOpen)
  const [deleteMode, setDeleteMode] = useState<boolean>(false)

  useEffect(() => {
    if (showOptions) {
      setDeleteMode(false)
    } else {
      setDeleteMode(true)
    }
  }, [showOptions])

  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])

  const actionHandler = (type: DialogActionEnum) => {
    action(type)
    setOpen(false)
    if (showOptions) setDeleteMode(false)
  }

  return  (
    <StyledDialog open={open}>
      {/* I would render as children and let the business logic in charge of it */}
      {deleteMode
      ? (
        <>
          <p>{text}</p>
          <footer>
            <button className='cancel' onClick={() => actionHandler(DialogActionEnum.CANCEL)}>Cancel</button>
            <button onClick={() => actionHandler(DialogActionEnum.CONFIRM)}>Confirm</button>
          </footer>
        </>
      )
      : (
        <>
          <p>What do you want to do?</p>
          <section>
            <button onClick={() => actionHandler(DialogActionEnum.DETAILS)}>Details</button>
            <button onClick={() => actionHandler(DialogActionEnum.EDIT)}>Edit</button>
            <button onClick={() => setDeleteMode(true)}>Delete</button>
            <button className='cancel' onClick={() => actionHandler(DialogActionEnum.CANCEL)}>Cancel</button>
          </section>
        </>
      )
      }
    </StyledDialog>)
}
