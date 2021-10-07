import { Subjects } from '../enums/subjects';

interface TicketCreatedEvent {
  subject: Subjects;
  data: {
    id: string;
    version: number;
    title: string;
    price: number;
    userId: string;
  };
}

export { TicketCreatedEvent };
