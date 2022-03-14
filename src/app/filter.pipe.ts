import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listafilter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string, searchField: string): any[] {

    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it[searchField].toLocaleLowerCase().includes(searchText);
    });
  }


}
