import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContacPageComponent } from './shared/pages/contac-page/contac-page.component';

const router: Routes = [
  // {
  //   path: '',
  //   component: HomePageComponent
  // },
  // {
  //   path: 'about',
  //   component: AboutPageComponent
  // },
  // {
  //   path: 'contac',
  //   component: ContacPageComponent
  // },
  {
    path: 'countries',
    loadChildren: () => import('./countries/countries.module').then( m => m.CountriesModule)
  },
  {
    path: '**',
    redirectTo: 'countries'
  }
]

@NgModule({
  imports: [
     RouterModule.forRoot( router)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRountingModule { }
