export interface Invoice {
  id: string;
  invoiceNumber: string;
  customer: string;
  amount: number;
  status: 'Paid' | 'Pending' | 'Overdue';
  dueDate: string;
}
