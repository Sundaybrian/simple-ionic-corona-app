import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'kenya',
        children: [
          {
            path: '',
            loadChildren: () => import('./kenya/kenya.module').then( m => m.KenyaPageModule)
          },

          {
            path: 'kenyamap',
            loadChildren: () => import('./kenya/kenya-map/kenya-map.module').then( m => m.KenyaMapPageModule)
          }
        ]
      },

      {
        path: 'africa',
        children: [
          {
            path: '',
            loadChildren: () => import('./africa/africa.module').then( m => m.AfricaPageModule)
          },
          {
            path: 'africamap',
            loadChildren: () => import('./africa/africa-map/africa-map.module').then( m => m.AfricaMapPageModule)
          }
        ]
      },

      {
        path: 'rest-of-world',
        children: [
          {
            path: '',
            loadChildren: () => import('./rest-of-world/rest-of-world.module').then( m => m.RestOfWorldPageModule)
          }
        ]
      },
      {
        path:'',
        redirectTo:'/home/tabs/kenya',
        pathMatch:'full'
      }
    ]
  },

  {
    path:'',
    redirectTo:'/home/tabs/kenya',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
