import { InjectionToken } from '@angular/core';

export * from './home.service';
export const token = new InjectionToken<string>('baseUrl');
