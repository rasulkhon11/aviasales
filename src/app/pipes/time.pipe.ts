import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'time'})

export class TimePipe implements PipeTransform {
  transform(value: number, ...args): any {
    const hour = Math.floor(value / 60);
    const minute = value - (hour * 60);
    return `${hour}ч ${minute}м`;
  }
}
