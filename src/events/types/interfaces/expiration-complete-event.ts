import { Subjects } from '../enums/subjects';

interface ExpirationCompleteEvent {
  subject: Subjects.ExpirationComplete;
  data: {
    orderId: string;
  };
}

export { ExpirationCompleteEvent };
