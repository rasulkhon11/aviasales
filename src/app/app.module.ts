import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { TransferPipe } from './pipes/transfer.pipe';
import { TimePipe } from './pipes/time.pipe';
import { TimeRangePipe } from './pipes/time-range.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ListItemComponent,
    TransferPipe,
    TimePipe,
    TimeRangePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
