import { Component, inject, signal } from '@angular/core';
import { environment } from '../environments/environment';
import { AppSettingsService } from './core/services/app-settings.service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('firstPage');
  environment = environment;
  appSettingsService = inject(AppSettingsService);

  get apiUrl(): string {
    return this.appSettingsService.config?.apiUrl ?? '';
  }

  get debug(): boolean {
    return this.appSettingsService.config?.debug ?? false;
  }
}
