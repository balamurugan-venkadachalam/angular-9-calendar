import { Component, OnInit } from '@angular/core';
import {MonthModel} from "./model/month-model";
import {DateModel} from "./model/date-model";
import {WeekModel} from "./model/week-model";

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {

  weekDays: string [] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  weekDaysAbbreviation: string [] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  months: string[] = ['January','February','March','April','May','June','July', 'August','September','October','November','December'];
  monthsAbbreviation: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  today: Date  = new Date();

  currentMonth = this.today.getMonth() ;
  currentYear = this.today.getFullYear();

  displayMonth = this.months[this.today.getMonth()];
  displayYear = this.today.getFullYear();

  calenderView = [];
  monthModel : MonthModel = new MonthModel();

  constructor() { }

  ngOnInit(): void {
    console.log('today date is '+ this.today);
    this.setCalender(this.currentMonth, this.currentYear);
    console.log(this.calenderView);
    console.log(this.monthModel);

  }
  next(){
    this.currentMonth++;
    this.setCalender(this.currentMonth, this.currentYear);
  }
  previous(){
    this.currentMonth--;
    this.setCalender(this.currentMonth, this.currentYear);
  }

  setCalender(month, year){
     this.calenderView = [];
     console.log('current month '+ month + ' current year '+ year)
     const date: Date = new Date(year, month);
     const firstDay = date.getDay();
     this.displayMonth = this.months[date.getMonth()];
     this.displayYear = date.getFullYear();

     let lastMonthDate = new Date(year, month);
     lastMonthDate.setDate(0);
     let lastMonthLastDate = lastMonthDate.getDate();
     let nextMonthFirstDate =1;

     let currentDate = 1
     const weeks: WeekModel[] = [];
     for (let i = 0; i< 6; i++){
       let isCurrentMonth = false;
       const days: DateModel[] = [];
       for (let j = 0; j < 7; j++) {
         let dateLabel = 0;
         if (i === 0 && j < firstDay) {
           if(firstDay === 1){
              this.calenderView.push(lastMonthLastDate);
             dateLabel = lastMonthLastDate;
           } else {
             dateLabel = (lastMonthLastDate - ((firstDay - 1)  - j));
             this.calenderView.push(dateLabel);
           }
           isCurrentMonth = false;
         } else if (currentDate > this.daysInMonth(month, year)) {
             dateLabel =nextMonthFirstDate
             this.calenderView.push(nextMonthFirstDate);
             nextMonthFirstDate++;
           isCurrentMonth = false;
         } else {
           dateLabel =currentDate
           this.calenderView.push(currentDate)
           currentDate ++;
           isCurrentMonth = true;
         }
         const dateModel: DateModel = new DateModel(dateLabel, this.weekDaysAbbreviation[j], isCurrentMonth);
         days.push(dateModel);
       }
       this.calenderView.push('|');
       weeks.push(new WeekModel(days));

     }
     this.monthModel.weeks = weeks;
  }

  daysInMonth(iMonth, iYear){
    return 32 - new Date(iYear, iMonth, 32).getDate();
  }

}
