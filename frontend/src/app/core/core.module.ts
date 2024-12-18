import { APP_INITIALIZER, ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppConfigService } from './services/app-config/app-config.service';
import { AuthTokenInterceptorService } from './interceptors/token-interceptor/auth-token-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ActivityService } from './services/activity/activity.service';
import { LocationService } from './services/location/location.service';
import { PersonService } from './services/person/person.service';

export function loadEnvironment(config: AppConfigService) {
  return () => config.loadEnvironment();
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        // service
        ActivityService,
        AppConfigService,
        LocationService,
        PersonService,

        { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptorService, multi: true },

        {
          provide: APP_INITIALIZER,
          useFactory: loadEnvironment,
          deps: [AppConfigService],
          multi: true,
        },
      ],
    };
  }
}
