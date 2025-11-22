import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prix',
  standalone: true
})
export class PrixPipe implements PipeTransform {

  transform(value: number): string {
   return value + ' DT';
  }

}