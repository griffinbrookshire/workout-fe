import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownComponent } from './common/dropdown/dropdown.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './common/header/header.component';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { WorkoutListComponent } from './data-driven/workout-list/workout-list.component';
import { WorkoutListItemComponent } from './data-driven/workout-list-item/workout-list-item.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    HomePageComponent,
    HeaderComponent,
    NavBarComponent,
    WorkoutListComponent,
    WorkoutListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
