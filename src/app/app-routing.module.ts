import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'app1/home',
    loadChildren: () => import('projects/application-one/src/app/pages/home/home.module').then(m => m.HomeModule)
  },
  { 
    path: 'app1/about',
    loadChildren: () => import('projects/application-one/src/app/pages/about/about.module').then(m => m.AboutModule)
  },
  { 
    path: 'app1/counter',
    loadChildren: () => import('projects/application-one/src/app/pages/counter/counter.module').then(m => m.CounterModule)
  },
  { 
    path: 'app2/home',
    loadChildren: () => import('projects/application-two/src/app/pages/home/home.module').then(m => m.HomeModule)
  },
  { 
    path: 'app2/about',
    loadChildren: () => import('projects/application-two/src/app/pages/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'app1', redirectTo: 'app1/home'
  },
  {
    path: 'app2', redirectTo: 'app2/home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
