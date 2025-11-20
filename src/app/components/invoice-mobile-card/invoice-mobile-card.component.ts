import {Component, input} from '@angular/core';
import {Invoice} from '../../models/invoice.model';
import {DatePipe, NgClass} from '@angular/common';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-invoice-mobile-card',
  imports: [
    DatePipe,
    MatChipsModule,
    NgClass
  ],
  templateUrl: './invoice-mobile-card.component.html',
  styleUrl: './invoice-mobile-card.component.scss'
})
export class InvoiceMobileCardComponent {
  invoice = input.required<Invoice>();
}
