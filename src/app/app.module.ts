import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule  } from 'agm-direction';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB4wCaQwz-gvP5agRHx8zATMcvIGUy4Qco'
    }),
    AgmDirectionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
