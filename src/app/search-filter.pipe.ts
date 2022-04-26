import { Pipe, PipeTransform } from '@angular/core';
import { Medicamento, Category } from './medicamentos.service'

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(items: Array<Medicamento>, searchText: string): Array<Medicamento> {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    if (searchText == "farmacia" || searchText == "parafarmacia" || searchText == "ortopedia"){
      return items.filter(it => {
        return Category[it.category] === searchText;
      });
    }else{
      return items.filter(it => {
        return it.title.toLocaleLowerCase().includes(searchText) || it.desc_short.toLocaleLowerCase().includes(searchText);
      });
    }
  }
}
