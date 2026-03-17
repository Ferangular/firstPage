import { Component, signal } from '@angular/core';
import { CursosComponent } from './components/cursos/cursos.component';
import { DescuentosComponent } from './components/descuentos/descuentos.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, DescuentosComponent, CursosComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('firstPage');
}
