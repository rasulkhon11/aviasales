import { Pipe, PipeTransform } from '@angular/core';
import { CATEGORIES } from '../category/category.component';

@Pipe({name: 'transfer'})

export class TransferPipe implements PipeTransform {
  transform(value: number, ...args): any {
    return CATEGORIES[value + 1].name;
  }
}
