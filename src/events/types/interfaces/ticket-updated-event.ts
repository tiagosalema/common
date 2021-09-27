import { Subjects } from '../../subjects';

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
