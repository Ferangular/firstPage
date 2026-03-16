import { Component, signal } from '@angular/core';
import { BeneficiosComponent } from './components/beneficios/beneficios.component';
import { CreaPodcastComponent } from './components/crea-podcast/crea-podcast.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PlanesComponent } from './components/planes/planes.component';
import { TestimonialesComponent } from './components/testimoniales/testimoniales.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    CreaPodcastComponent,
    BeneficiosComponent,
    EstadisticasComponent,
    PlanesComponent,
    TestimonialesComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('firstPage');
}
