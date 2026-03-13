import { Component } from '@angular/core';
import { ImagenGaleria } from '../../core/interfaces/imange-galeria.interface';

@Component({
  selector: 'app-galeria-component',
  imports: [],
  templateUrl: './galeria-component.html',
  styleUrl: './galeria-component.css',
})
export class GaleriaComponent {
  imagenes: ImagenGaleria[] = [
    { id: 1, nombre: 'galeria_01', alt: 'Galería 1' },
    { id: 2, nombre: 'galeria_02', alt: 'Galería 2' },
    { id: 3, nombre: 'galeria_03', alt: 'Galería 3' },
    { id: 4, nombre: 'galeria_04', alt: 'Galería 4' },
    { id: 5, nombre: 'galeria_05', alt: 'Galería 5' },
    { id: 6, nombre: 'galeria_06', alt: 'Galería 6' },
    { id: 7, nombre: 'galeria_07', alt: 'Galería 7' },
    { id: 8, nombre: 'galeria_08', alt: 'Galería 8' },
    { id: 9, nombre: 'galeria_09', alt: 'Galería 9' }
  ];

  imagenSeleccionada: ImagenGaleria | null = null;

  seleccionarImagen(imagen: ImagenGaleria): void {
    this.imagenSeleccionada = imagen;
  }

  limpiarImagenSeleccionada(): void {
    this.imagenSeleccionada = null;
  }
}
