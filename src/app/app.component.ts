import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = '';
  date: string = '';
  amount: number;
  height: number;
  miles: number;

  onNameChange(value: string) {
    this.name = value;
  }

  onMilesChange(value: string) {
    this.miles = parseFloat(value);
  }

  onDateChange(value: string) {
    this.date = value;
  }

  onAmountChange(value: number) {
    this.amount = value;
  }

  onHeightChange(value: string) {
    this.height = parseFloat(value);
  }
}
