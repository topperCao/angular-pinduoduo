import { NgModule, InjectionToken } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared';
import { HomeContainerComponent, HomeDetailComponent } from './components';
import { HomeService, token } from './services';

@NgModule({
  declarations: [HomeContainerComponent, HomeDetailComponent],
  // 传统写法，如果采用这种写法，就不能在 service 中写 `providedIn`
  providers: [{ provide: token, useValue: 'http://localhost' }],
  imports: [SharedModule, HomeRoutingModule]
})
export class HomeModule {}
