import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { CharactersModule } from './characters/characters.module';
import { StatisticsModule } from './statistics/statistics.module';
import { HeaderModule } from './shared/components/header/header.module';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    HeaderModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    CharactersModule,
    StatisticsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
