import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'deadline'
})
export class DeadlinePipe implements PipeTransform {
  transform(deadline: string, emodji: string = ' 🔥'): string {
    const currentWeek = moment().week();
    const deadlineWeek = moment(deadline).week();

    if (currentWeek >= deadlineWeek) {
      return deadline + emodji;
    }
    return deadline;
  }
}
