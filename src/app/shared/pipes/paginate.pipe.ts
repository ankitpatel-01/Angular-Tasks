import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {

  transform(data: any[], dataPerPage: number, currentPage: number): any[] {
    const indexOfLastData = currentPage * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;
    return data.slice(indexOfFirstData, indexOfLastData)
  }

}
