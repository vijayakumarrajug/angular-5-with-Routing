import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule }     from './app-routing.module';
import { DataserviceService } from './services/dataservice.service';
import { UsercomponentComponent } from './usercomponent/usercomponent.component';
import { HerosComponent } from './heros/heros.component';


@NgModule({
  declarations: [
    AppComponent,
    UsercomponentComponent,
    HerosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
