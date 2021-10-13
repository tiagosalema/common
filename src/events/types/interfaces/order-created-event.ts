import { Subjects } from '../enums/subjects';
import { OrderStatus } from '../enums/order-status';

interface OrderCreatedEvent {
  subject: Subjects;
  data: {
    id: string;
    version: number;
    status: OrderStatus;
    userId: string;
    ticket: {
      id: string;
      price: number;
    };
    expiresAt: string; // stringified date for better control
  };
}

export { OrderCreatedEvent };
