export enum OrderStatus {
  Created = 'created', // unreserved ticket
  Cancelled = 'cancelled', // user cancelled it, it's already reserved or order is expired
  AwaitingPayment = 'awaiting:payment', // order reserved the ticket
  Complete = 'complete', // payment completed
}
