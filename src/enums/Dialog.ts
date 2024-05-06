import { FormFields } from "../components/Form/types"
import { ActionsEnum } from "./Actions"

export enum DialogActionEnum {
  CANCEL = 'CANCEL',
  CONFIRM = 'CONFIRM',
  OPTIONS  = 'OPTIONS',
  EDIT  = 'EDIT',
  DELETE  = 'DELETE',
  DETAILS = 'DETAILS',
}

export type DialogConfig = {
  name: ActionsEnum,
  text?: string,
  eventId?: string,
  fields?: FormFields
}
