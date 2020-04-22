import { NgModule } from '@angular/core';

import { RecommendRoutingModule } from './recommend-routing.module';
import { SharedModule } from '../shared';
import { RecommendContainerComponent } from './components';

@NgModule({
  declarations: [RecommendContainerComponent],
  imports: [SharedModule, RecommendRoutingModule]
})
export class RecommendModule {}
