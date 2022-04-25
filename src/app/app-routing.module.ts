import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainLayoutComponent} from "./shared/layouts/main-layout/main-layout.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {AboutPageComponent} from "./pages/about-page/about-page.component";
import {ProjectsPageComponent} from "./pages/projects-page/projects-page.component";
import {ReviewsPageComponent} from "./pages/reviews-page/reviews-page.component";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/home-page', pathMatch: 'full'},
      {path: 'home-page', component: HomePageComponent},
      {path: 'about-page', component: AboutPageComponent},
      {path: 'projects-page', component: ProjectsPageComponent},
      {path: 'reviews-page', component: ReviewsPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
