import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SharedModule } from './shared';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule, NotificationInterceptor, ParamInterceptor } from './home';
import { RecommendModule } from './recommend';
import { MyModule } from './my';
import { CategoryModule } from './category';
import { ChatModule } from './chat';
import { ProductModule } from './product';

import localeZh from '@angular/common/locales/zh-Hans';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    RecommendModule,
    MyModule,
    CategoryModule,
    ChatModule,
    ProductModule
  ],
  providers: [
    {
      // 系统提供的 LOCALE_ID 就是一个 InjectionToken
      provide: LOCALE_ID,
      useValue: 'zh-Hans'
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NotificationInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ParamInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(localeZh, 'zh');
  }
}
