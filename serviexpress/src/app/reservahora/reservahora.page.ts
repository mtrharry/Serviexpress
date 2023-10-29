import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reservahora',
  templateUrl: './reservahora.page.html',
  styleUrls: ['./reservahora.page.scss'],
})
export class ReservahoraPage implements OnInit {
  selectedDate: Date = new Date();
  availableHours: string[] = [];
  currentMonth: string;
  weeks: Date[][] = [];

  availableHoursData: { [key: string]: string[] } = {
   /* '2023-10-01': ['9:00 AM', '10:00 AM', '2:00 PM'],
    '2023-10-05': ['10:00 AM', '11:00 AM', '3:00 PM'],
    '2023-10-15': ['8:00 AM', '12:00 PM', '4:00 PM'],*/
  };

  constructor() {
    this.currentMonth = this.formatMonth(new Date());
    this.generateCalendar(new Date());
  }

  updateAvailableHours(date: Date) {
    const selectedDateString = this.formatDate(date);
    this.availableHours = this.availableHoursData[selectedDateString] || [];
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  dateChanged() {
    this.updateAvailableHours(this.selectedDate);
  }

  formatMonth(date: Date): string {
    const options = { year: 'numeric', month: 'long' };
    return date.toLocaleDateString('es-ES', options as any);
  }

  generateCalendar(date: Date) {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const daysInMonth = lastDay.getDate();

    this.weeks = [];

    let currentWeek: Date[] = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const currentDate = new Date(date.getFullYear(), date.getMonth(), i);
      currentWeek.push(currentDate);

      if (currentDate.getDay() === 6 || i === daysInMonth) {
        this.weeks.push(currentWeek);
        currentWeek = [];
      }
    }
  }

  previousMonth() {
    const current = new Date(this.weeks[0][0]);
    current.setMonth(current.getMonth() - 1);
    this.currentMonth = this.formatMonth(current);
    this.generateCalendar(current);
  }

  nextMonth() {
    const current = new Date(this.weeks[0][0]);
    current.setMonth(current.getMonth() + 1);
    this.currentMonth = this.formatMonth(current);
    this.generateCalendar(current);
  }

  isDateInCurrentMonth(date: Date) {
    return date.getMonth() === this.selectedDate.getMonth();
  }

  ngOnInit() {
  }
}