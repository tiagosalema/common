import { Subjects } from '../enums/subjects';

interface OrderCancelledEvent {
  subject: Subjects;
  data: {
    id: string;
    version: number;
    ticket: {
      id: string;
    };
  };
}

export { OrderCancelledEvent };
