import { Subjects } from '../enums/subjects';

interface OrderCreatedEvent {
  subject: Subjects;
  data: {
    id: string;
    userId: string;
    price: number;
    expiresAt: string; // stringified from Date for better control
  };
}

export { OrderCreatedEvent };
