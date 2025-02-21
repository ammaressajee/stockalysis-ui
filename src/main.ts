import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideAuth0 } from '@auth0/auth0-angular';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config'; // 
import { environment as env } from './environments/environment';

bootstrapApplication(AppComponent, {
  ...appConfig, // Keep existing configuration
  providers: [
    ...(appConfig.providers || []), // Preserve other providers
    provideHttpClient(),
    provideAuth0({
      domain: env.auth.domain,
      clientId: env.auth.clientId,
      authorizationParams: {
        audience: env.auth.audience,
        redirect_uri: window.location.origin,
        scope: env.auth.scope,

      }
    }),
  ],
}).catch((err) => console.error(err));
