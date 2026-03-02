import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { routes } from './app.routes';
import { ConsoleLogger, FileLogger } from './core/services/logger-service';
import { LOGGER } from './core/models/issues';


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  { provide: LOGGER, useClass: ConsoleLogger, multi: true },
  { provide: LOGGER, useClass: FileLogger, multi: true }
  ]
};
