import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './search/search.component';
import { SearchTabComponent } from './search/search-tab/search-tab.component';
import { SearchResultComponent } from './search/search-result/search-result.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchTabComponent,
    SearchResultComponent,
    AdvertisementComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
