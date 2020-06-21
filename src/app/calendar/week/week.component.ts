import {Component, Input, OnInit} from '@angular/core';
import {WeekModel} from "../model/week-model";
import {DateModel} from "../model/date-model";

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent implements OnInit {

  @Input() weekModels: WeekModel[] = null;
  @Input() dates: DateModel[] = null;
  constructor() { }

  ngOnInit(): void {
  }

}
