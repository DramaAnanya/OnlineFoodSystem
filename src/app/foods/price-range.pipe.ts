import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceRange'
})
export class PriceRangePipe implements PipeTransform {

  transform(items: any[], startPrice: number, endPrice: number): any {
    if (startPrice === 50 && endPrice === 50) {
      return items; // No filtering needed if startPrice and endPrice are both 50
    }

    return items.filter((fooditem: any) => fooditem.food_price >= startPrice && fooditem.food_price <= endPrice);
  }
}
