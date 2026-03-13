import { Routes } from '@angular/router';
import { InicioComponent } from './features/inicio-component/inicio-component';
import { NosotrosComponent } from './features/nosotros-component/nosotros-component';
import { TiendaComponent } from './features/tienda-component/tienda-component';
import { BlogComponent } from './features/blog-component/blog-component';
import { EntradaComponent } from './features/entrada-component/entrada-component';
import { GaleriaComponent } from './features/galeria-component/galeria-component';
import { ContactoComponent } from './features/contacto-component/contacto-component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'tienda', component: TiendaComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/entrada', component: EntradaComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '' }
];
