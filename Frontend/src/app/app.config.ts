import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
// import { authInterceptorProvider } from './services/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations(),provideHttpClient()]
};
