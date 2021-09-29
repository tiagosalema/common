import { Subjects } from '../enums/subjects';

interface TicketUpdatedEvent {
  subject: Subjects;
  data: {
    id: string;
    title: string;
    price: number;
    userId: string;
  };
}

export { TicketUpdatedEvent };
