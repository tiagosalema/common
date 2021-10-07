import { Subjects } from '../enums/subjects';

interface TicketUpdatedEvent {
  subject: Subjects;
  data: {
    id: string;
    version: number;
    title: string;
    price: number;
    userId: string;
  };
}

export { TicketUpdatedEvent };
