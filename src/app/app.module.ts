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
import { WorkoutDetailsPageComponent } from './pages/workout-details-page/workout-details-page.component';
import { FormsModule } from '@angular/forms';
import { HasPropPipe } from './pipes/has-prop.pipe';
import { WorkoutService } from './services/workout.service';
import { LiftListComponent } from './data-driven/lift-list/lift-list.component';
import { LiftListItemComponent } from './data-driven/lift-list-item/lift-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    HomePageComponent,
    HeaderComponent,
    NavBarComponent,
    WorkoutListComponent,
    WorkoutListItemComponent,
    WorkoutDetailsPageComponent,
    HasPropPipe,
    LiftListComponent,
    LiftListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WorkoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
