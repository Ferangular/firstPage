import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, TranslocoDirective],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  private translocoService = inject(TranslocoService);

  get activeLang(): string {
    return this.translocoService.getActiveLang();
  }

  changeLang(lang: 'es' | 'en'): void {
    this.translocoService.setActiveLang(lang);
  }
}
