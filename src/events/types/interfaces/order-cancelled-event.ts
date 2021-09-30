import { Subjects } from '../enums/subjects';

interface OrderCancelledEvent {
  subject: Subjects;
  data: {
    id: string;
    ticket: {
      id: string;
    };
  };
}

export { OrderCancelledEvent };
