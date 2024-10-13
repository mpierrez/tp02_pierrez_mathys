import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppFormComponent } from './app-form/app-form.component';
import { DataSummaryComponent } from './data-summary/data-summary.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppFormComponent, DataSummaryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'app';

  formData: any = {};

  onFormSubmit(data: any) {
    console.log('Form data received in AppComponent:', data);
    this.formData = data;
  }
}
