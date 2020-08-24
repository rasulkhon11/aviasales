import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({name: 'timeRange'})

export class TimeRangePipe implements PipeTransform {
  transform(value: number, ...args): any {
    const datePipe = new DatePipe('en-US');
    const secondTime = new Date(value).setMinutes(new Date(value).getMinutes() + args[0]);
    return `${datePipe.transform(value, 'HH:mm', 'utc')} - ${datePipe.transform(secondTime, 'HH:mm', 'utc')}`;
  }
}
