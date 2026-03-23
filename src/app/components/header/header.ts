import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-header',
  imports: [RouterLink, TranslocoModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private translocoService = inject(TranslocoService);

  changeLanguage(lang: string) {
    this.translocoService.setActiveLang(lang);
  }

  getCurrentLanguage() {
    return this.translocoService.getActiveLang();
  }
}
