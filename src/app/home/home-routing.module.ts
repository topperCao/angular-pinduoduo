import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContainerComponent, HomeDetailComponent } from './components';

const routes: Routes = [
  {
    path: 'home',
    component: HomeContainerComponent,
    children: [
      {
        /**
         * 路由节点可以没有 component
         * 一般用于重定向到一个默认子路由
         */
        path: '',
        redirectTo: 'hot',
        pathMatch: 'full'
      },
      {
        /**
         * 路径参数，看起来是 URL 的一部分
         */
        path: ':tabLink',
        component: HomeDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
