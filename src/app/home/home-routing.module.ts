import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './page/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomePageComponent,
      },

      {
        path: 'home',
        component: HomePageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
