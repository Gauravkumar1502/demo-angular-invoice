import {Component, effect, input} from '@angular/core';
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
    NgClass
  ],
  templateUrl: './invoices-table.component.html',
  styleUrl: './invoices-table.component.scss'
})
export class InvoicesTableComponent {
  data = input<Invoice[]>([]);

  displayedColumns = ['invoiceNumber', 'customer', 'amount', 'status', 'dueDate', 'actions'];
  dataSource = new MatTableDataSource<Invoice>();

  constructor() {
    console.log('InvoicesTableComponent constructor');
    effect(() => {
      console.log("InvoicesTableComponent data changed", this.data());
      this.dataSource.data = this.data();
    });
  }
}
