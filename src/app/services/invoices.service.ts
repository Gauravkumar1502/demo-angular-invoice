import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice.model';

@Injectable({
  providedIn: 'root',
})
export class InvoicesService {
  private invoices: Invoice[] = [
    { id:'1', invoiceNumber: 'INV-001', customer: 'Acme Corporation', amount: 2450.0, status: 'Paid', dueDate: '2025-11-15' },
    { id:'2', invoiceNumber: 'INV-002', customer: 'TechStart Inc.', amount: 1200.5, status: 'Pending', dueDate: '2025-11-25' },
    { id:'3', invoiceNumber: 'INV-003', customer: 'Global Solutions', amount: 5890.0, status: 'Overdue', dueDate: '2025-11-10' },
    { id:'4', invoiceNumber: 'INV-004', customer: 'Design Studio Pro', amount: 3150.75, status: 'Paid', dueDate: '2025-11-18' },
    { id:'5', invoiceNumber: 'INV-005', customer: 'Marketing Plus', amount: 890.0, status: 'Pending', dueDate: '2025-11-30' },
    { id:'6', invoiceNumber: 'INV-006', customer: 'Retail Systems Co.', amount: 4275.2, status: 'Paid', dueDate: '2025-11-12' },
    { id:'7', invoiceNumber: 'INV-007', customer: 'CloudTech Services', amount: 6500.0, status: 'Pending', dueDate: '2025-12-05' },
    { id:'8', invoiceNumber: 'INV-008', customer: 'Enterprise Holdings', amount: 8920.5, status: 'Paid', dueDate: '2025-11-08' },
  ];


  getAll(): Invoice[] {
    return this.invoices;
  }

  filterByStatus(status: string): Invoice[] {
    if (!status || status === 'All') {
      return this.getAll();
    }
    return this.invoices.filter(inv => inv.status === status);
  }

  search(term: string): Invoice[] {
    if (!term.trim()) return this.getAll();
    const t = term.toLowerCase();
    return this.invoices.filter(inv =>
      inv.customer.toLowerCase().includes(t) || inv.id.toLowerCase().includes(t)
    );
  }

  filterAndSearch(status: string, search: string): Invoice[] {
    let results = this.filterByStatus(status);
    if (search.trim()) {
      const t = search.toLowerCase();
      results = results.filter(inv =>
        inv.customer.toLowerCase().includes(t) || inv.id.toLowerCase().includes(t)
      );
    }
    return results;
  }
}
