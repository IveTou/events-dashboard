import { EventDetail } from "../../types/Event";

export type FormFields = Omit<EventDetail, 'id' | 'allDay'>
