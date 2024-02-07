import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { SearchPipe } from './search.pipe';
import { PriceRangePipe } from './price-range.pipe';
@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {
  public foodlist:any=[];
  searchText = '';
  searchData: any;
  public startPrice = 50;
  public endPrice = 3000;
  public startLink:number=1;
totalRows: any;

 constructor(private aService:ApiService){}

 ngOnInit(): void {
   let data = this.aService.getAll();
   data.subscribe((res:any)=>{
    this.foodlist= res;
    //console.log(res);
    
    console.log(this.foodlist);
   })
 }
 toggleDescription(food: any): void {
  // Toggle the 'showDescription' property for the clicked food item
  food.showDescription = !food.showDescription;

  this.foodlist = this.foodlist.filter(Boolean);
       this.foodlist = this.foodlist.filter((item:any,pos:number,self:any)=>{
            return self.indexOf(item) == pos;
          });
}
}
