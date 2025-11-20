import {Component, input} from '@angular/core';

@Component({
  selector: 'app-invoices-header',
  imports: [],
  templateUrl: './invoices-header.component.html',
  styleUrl: './invoices-header.component.scss'
})
export class InvoicesHeaderComponent {
  title = input<string>('Title');
  subtitle = input<string>('Subtitle');
}

