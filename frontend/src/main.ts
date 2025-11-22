import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';
import { appRoutes } from './app/app.routes';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';

if (environment.production) enableProdMode();

bootstrapApplication(App, {
  ...(Array.isArray(appConfig) ? {} : (appConfig as any)),
  providers: [
    ...(Array.isArray(appConfig) ? appConfig : (appConfig as any)?.providers ?? []),
    provideHttpClient(),

    provideRouter(appRoutes, withPreloading(PreloadAllModules)),
  ],
})
  .catch((err) => console.error(err));
