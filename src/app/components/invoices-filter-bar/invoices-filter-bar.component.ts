import {Component, effect, output} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {ReactiveFormsModule, FormControl, FormGroup} from '@angular/forms';
import {MatDatepickerToggle, MatDateRangeInput} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-invoices-filter-bar',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDateRangeInput,
    MatDatepickerToggle,
    MatFormFieldModule,
    MatDatepickerModule
  ],
  templateUrl: './invoices-filter-bar.component.html',
  styleUrl: './invoices-filter-bar.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class InvoicesFilterBarComponent {
  form = new FormGroup({
    status: new FormControl('all', { nonNullable: true }),
    search: new FormControl('', { nonNullable: true }),
    dateRange: new FormGroup({
      start: new FormControl<Date | null>(null),
      end: new FormControl<Date | null>(null)
    })
  });
  filtersChanged = output<any>();

  ngOnInit() {
    this.form.valueChanges.subscribe(value => {
      this.filtersChanged.emit({
        status: value.status,
        search: value.search,
        dateRange: {
          start: value.dateRange?.start ?? null,
          end: value.dateRange?.end ?? null
        }
      });

      console.log("Emitting filters:", value);
    });
  }
}
