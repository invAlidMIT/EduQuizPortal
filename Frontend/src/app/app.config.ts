import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations(),provideHttpClient(),
    provideHttpClient(
      withInterceptorsFromDi()
  ),
  importProvidersFrom(NgHttpLoaderModule.forRoot())]
};
