import { Subjects } from '../enums/subjects';

interface OrderCreatedEvent {
  subject: Subjects;
  data: {
    id: string;
    version: number;
    userId: string;
    ticket: {
      id: string;
      price: number;
    };
    expiresAt: string; // stringified date for better control
  };
}

export { OrderCreatedEvent };
