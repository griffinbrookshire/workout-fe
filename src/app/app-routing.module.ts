import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { WorkoutDetailsPageComponent } from './pages/workout-details-page/workout-details-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/allworkouts', pathMatch: 'full' },
  { path: 'allworkouts', component: HomePageComponent },
  { path: 'workout/:id', component: WorkoutDetailsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
