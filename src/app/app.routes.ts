import { Routes } from '@angular/router';
import { Blog } from './components/blog/blog';
import { Contacto } from './components/contacto/contacto';
import { Entrada } from './components/entrada/entrada';
import { Nosotros } from './components/nosotros/nosotros';
import { Producto } from './components/producto/producto';
import { Start } from './components/start/start';
import { Tienda } from './components/tienda/tienda';

export const routes: Routes = [
  {
    path: '',
    component: Start,
  },
  {
    path: 'nosotros',
    component: Nosotros,
  },
  {
    path: 'blog',
    component: Blog,
  },
  {
    path: 'tienda',
    component: Tienda,
  },
  {
    path: 'contacto',
    component: Contacto,
  },
  {
    path: 'producto/:id',
    component: Producto,
  },
  {
    path: 'entrada',
    component: Entrada,
  },
];
