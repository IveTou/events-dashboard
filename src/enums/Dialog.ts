import { FormFields } from "../components/Form/types"
import { ActionsEnum } from "./Actions"

export enum DialogAction {
  CANCEL = 'CANCEL',
  CONFIRM = 'CONFIRM',
}

export type DialogConfig = {
  name: ActionsEnum,
  text?: string,
  eventId?: string,
  fields?: FormFields
}
