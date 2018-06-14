import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MyComponent } from './my/my.component';
import { BrowseComponent } from './browse/browse.component';
import { Browse2Component } from './browse2/browse2.component';
import { Browse3Component } from './browse3/browse3.component';
import { Browse4Component } from './browse4/browse4.component';
import { Browse5Component } from './browse5/browse5.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'about', component: AboutComponent},
  { path: 'my', component: MyComponent},
  { path: 'browse', component: BrowseComponent},
  { path: 'browse2', component: Browse2Component},
  { path: 'browse3', component: Browse3Component},
  { path: 'browse4', component: Browse4Component},
  { path: 'browse5', component: Browse5Component},
  { path: 'game/:id', component: GameComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
