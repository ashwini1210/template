import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Image1Component } from './image1/image1.component';
import { Image2Component } from './image2/image2.component';
import { Image3Component } from './image3/image3.component';
import { Image4Component } from './image4/image4.component';
import { TableComponent } from './table/table.component';
import { Ng2TableModule } from 'ng2-table/ng2-table';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    Image1Component,
    Image2Component,
    Image3Component,
    Image4Component,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    Ng2TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
