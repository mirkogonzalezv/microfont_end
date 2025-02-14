import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { HostAppComponent} from './app/app.component';

bootstrapApplication(HostAppComponent, appConfig)
  .catch((err) => console.error(err));
