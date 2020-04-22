import { NgModule } from '@angular/core';

import { ChatRoutingModule } from './chat-routing.module';
import { SharedModule } from '../shared';
import { ChatContainerComponent } from './components';

@NgModule({
  declarations: [ChatContainerComponent],
  imports: [SharedModule, ChatRoutingModule]
})
export class ChatModule {}
