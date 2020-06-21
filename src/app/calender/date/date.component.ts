import {Component, Input, OnInit} from '@angular/core';
import {DateModel} from "../model/date-model";

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  @Input() dateModel: DateModel = null;

  constructor() { }

  ngOnInit(): void {
  }

}
