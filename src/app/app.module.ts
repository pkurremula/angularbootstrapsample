import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutCompComponent } from './layout-comp/layout-comp.component';
import { BootgridComponent } from './bootgrid/bootgrid.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutCompComponent,
    BootgridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
