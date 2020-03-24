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
            loadChildren: './kenya/kenya.module#KenyaPageModule'
          },

          {
            path: 'kenyamap',
            loadChildren:
              './kenya/kenya-map/kenya-map.module#KenyaMapPageModule'
          }
        ]
      },

      {
        path: 'africa',
        children: [
          {
            path: '',
            loadChildren: './africa/africa.module#AfricaPageModule'
          },
          {
            path: 'africamap',
            loadChildren:
              './africa/africa-map/africa-map.module#AfricaMapPageModule'
          }
        ]
      },

      {
        path: 'rest-of-world',
        children: [
          {
            path: '',
            loadChildren:
              './rest-of-world/rest-of-word.module#RestOfWorldPageModule'
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
