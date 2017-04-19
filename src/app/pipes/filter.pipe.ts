import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'filter'})
export class FilterPipe implements PipeTransform {
  transform(value: any[], args?: any): any {
    switch (args) {
      case 'active':
        return value.filter(item => !item.done);
      case 'completed':
        return value.filter(item => item.done);
      case 'all':
        return value;
    }
    return null;
  }
}
