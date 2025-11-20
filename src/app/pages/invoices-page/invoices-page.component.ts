import {Component, computed, signal} from '@angular/core';
import {InvoicesService} from '../../services/invoices.service';
import {Invoice} from '../../models/invoice.model';
import {InvoicesTableComponent} from '../../components/invoices-table/invoices-table.component';
import {InvoicesFilterBarComponent} from '../../components/invoices-filter-bar/invoices-filter-bar.component';
import {InvoicesHeaderComponent} from '../../components/invoices-header/invoices-header.component';

@Component({
  selector: 'app-invoices-page',
  imports: [InvoicesTableComponent, InvoicesFilterBarComponent, InvoicesHeaderComponent],
  templateUrl: './invoices-page.component.html',
  styleUrl: './invoices-page.component.scss'
})
export class InvoicesPageComponent {
  constructor(private invoicesService: InvoicesService) {
    this.allInvoices.set(this.invoicesService.getAll());
  }
  title = 'Invoice';
  subtitle = 'Manage and track customer invoices in real time.'

  allInvoices = signal<Invoice[]>([]);

  status = signal<'All' | 'Paid' | 'Pending' | 'Overdue'>('All');
  search = signal<string>('');

  filteredInvoices = computed(() => {
    let list = this.allInvoices();

    const status = this.status().trim();
    if (status && status !== 'All') {
      list = list.filter(inv =>
        inv.status.toLowerCase() === status.toLowerCase()
      );
    }

    const search = this.search().trim().toLowerCase();
    if (search) {
      list = list.filter(inv =>
        inv.customer.toLowerCase().includes(search) ||
        inv.invoiceNumber.toLowerCase().includes(search)
      );
    }


    const dr = this.dateRange();
    if (dr.start && dr.end) {
      list = list.filter(inv => {
        const due = new Date(inv.dueDate);
        return due >= dr.start! && due <= dr.end!;
      });
    }

    return list;
  });

  dateRange = signal<{ start: Date | null; end: Date | null }>({ start: null, end: null });

  onFiltersChanged(filters: any) {
    console.log('onFiltersChanged', filters);
    this.status.set(filters.status);
    this.search.set(filters.search);
    this.dateRange.set(filters.dateRange);
  }

}
