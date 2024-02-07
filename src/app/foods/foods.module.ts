import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FoodsRoutingModule } from './foods-routing.module';
import { FoodsComponent } from './foods.component';
import { SearchPipe } from './search.pipe';
import { PriceRangePipe } from './price-range.pipe';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    FoodsComponent,
    SearchPipe,
    PriceRangePipe
  ],
  imports: [
    CommonModule,
    FoodsRoutingModule,
    FormsModule,
    NgxPaginationModule
  ],
  exports:[FoodsComponent]
})
export class FoodsModule { }
