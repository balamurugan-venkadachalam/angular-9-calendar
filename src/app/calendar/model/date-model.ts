export class DateModel {
  public events: string[] = ['No Events'];

  constructor(public date: number, public weekDay: string, public currentMonth: boolean) {

  }
}
