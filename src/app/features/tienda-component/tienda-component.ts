import { Component } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';


interface Producto {
  id: number;
  imagen: string;
  destacado?: boolean;
}


@Component({
  selector: 'app-tienda-component',
  imports: [TranslocoDirective],
  templateUrl: './tienda-component.html',
  styleUrl: './tienda-component.css',
})
export class TiendaComponent {
  productoDestacado: Producto = { id: 1, imagen: 'producto1.jpg' };

  productosFilaDos: Producto[] = [
    { id: 2, imagen: 'producto2.jpg' },
    { id: 3, imagen: 'producto3.jpg' }
  ];

  productosFilaTres: Producto[] = [
    { id: 4, imagen: 'producto4.jpg' },
    { id: 5, imagen: 'producto5.jpg' },
    { id: 6, imagen: 'producto6.jpg' }
  ];
}
