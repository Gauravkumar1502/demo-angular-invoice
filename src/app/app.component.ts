import {Component} from '@angular/core';
import {InvoicesPageComponent} from './pages/invoices-page/invoices-page.component';

@Component({
  selector: 'app-root',
  imports: [
    InvoicesPageComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Invoice';
}
