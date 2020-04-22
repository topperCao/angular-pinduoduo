import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductContainerComponent, ConfirmOrderComponent } from './components';

const routes: Routes = [
  {
    path: 'products',
    children: [
      {
        path: ':productId',
        component: ProductContainerComponent
      }
    ]
  },
  {
    path: 'orders/confirm',
    component: ConfirmOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
