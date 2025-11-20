import {Component, effect, inject, input, signal} from '@angular/core';
import {Invoice} from '../../models/invoice.model';
import {MatChipsModule} from '@angular/material/chips';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable,
  MatTableDataSource
} from '@angular/material/table';
import {DatePipe, NgClass} from '@angular/common';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {InvoiceMobileCardComponent} from '../invoice-mobile-card/invoice-mobile-card.component';

@Component({
  selector: 'app-invoices-table',
  imports: [
    DatePipe,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatCellDef,
    MatHeaderCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatChipsModule,
    NgClass,
    InvoiceMobileCardComponent
  ],
  templateUrl: './invoices-table.component.html',
  styleUrl: './invoices-table.component.scss'
})
export class InvoicesTableComponent {
  data = input<Invoice[]>([]);

  displayedColumns = ['invoiceNumber', 'customer', 'amount', 'status', 'dueDate', 'actions'];
  dataSource = new MatTableDataSource<Invoice>();
  private breakpointObserver = inject(BreakpointObserver);
  isMobile = signal(false);
  constructor() {
    effect(() => {
      this.dataSource.data = this.data();
    });
    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Handset])
      .subscribe(result => {
        this.isMobile.set(result.matches);
      });
  }
}
