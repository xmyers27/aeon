import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MyComponent } from './my/my.component';
import { BrowseComponent } from './browse/browse.component';
import { HttpClientModule } from '@angular/common/http';
import { MandoComponent } from './mando/mando.component';
import { Browse2Component } from './browse2/browse2.component';
import { Browse3Component } from './browse3/browse3.component';
import { Browse4Component } from './browse4/browse4.component';
import { Browse5Component } from './browse5/browse5.component';
import { GameComponent } from './game/game.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    MyComponent,
    BrowseComponent,
    MandoComponent,
    Browse2Component,
    Browse3Component,
    Browse4Component,
    Browse5Component,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
