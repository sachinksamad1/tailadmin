import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';
import { routes } from './app/app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';

if (environment.production) enableProdMode();

bootstrapApplication(App, {
  ...(Array.isArray(appConfig) ? {} : (appConfig as any)),
  providers: [
    ...(Array.isArray(appConfig) ? appConfig : (appConfig as any)?.providers ?? []),
    provideHttpClient(),
    provideAnimations(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
})
  .catch((err) => console.error(err));
