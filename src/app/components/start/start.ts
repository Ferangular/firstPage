import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';

interface Guitarra {
  id: number;
  nombre: string;
  imagen: string;
  descripcion: string;
  precio: number;
}

interface BlogPost {
  id: number;
  titulo: string;
  imagen: string;
  fecha: string;
  extracto: string;
}

@Component({
  selector: 'app-start',
  imports: [RouterLink, TranslocoModule],
  templateUrl: './start.html',
  styleUrl: './start.css',
})
export class Start {
  guitarras = signal<Guitarra[]>([
    {
      id: 1,
      nombre: 'Lukather',
      imagen: 'guitarra_01.jpg',
      descripcion:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt',
      precio: 299,
    },
    {
      id: 2,
      nombre: 'SRV',
      imagen: 'guitarra_02.jpg',
      descripcion:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt',
      precio: 299,
    },
    {
      id: 3,
      nombre: 'Borland',
      imagen: 'guitarra_03.jpg',
      descripcion:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt',
      precio: 299,
    },
    {
      id: 4,
      nombre: 'Vai',
      imagen: 'guitarra_04.jpg',
      descripcion:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt',
      precio: 299,
    },
    {
      id: 5,
      nombre: 'Thompson',
      imagen: 'guitarra_05.jpg',
      descripcion:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt',
      precio: 299,
    },
    {
      id: 6,
      nombre: 'White',
      imagen: 'guitarra_06.jpg',
      descripcion:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt',
      precio: 299,
    },
    {
      id: 7,
      nombre: 'Cobain',
      imagen: 'guitarra_07.jpg',
      descripcion:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt',
      precio: 299,
    },
    {
      id: 8,
      nombre: 'Dale',
      imagen: 'guitarra_08.jpg',
      descripcion:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt',
      precio: 299,
    },
    {
      id: 9,
      nombre: 'Krieger',
      imagen: 'guitarra_09.jpg',
      descripcion:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt',
      precio: 299,
    },
    {
      id: 10,
      nombre: 'Campbell',
      imagen: 'guitarra_10.jpg',
      descripcion:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt',
      precio: 299,
    },
    {
      id: 11,
      nombre: 'Reed',
      imagen: 'guitarra_11.jpg',
      descripcion:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt',
      precio: 299,
    },
    {
      id: 12,
      nombre: 'Hazel',
      imagen: 'guitarra_12.jpg',
      descripcion:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt',
      precio: 299,
    },
  ]);

  blogPosts = signal<BlogPost[]>([
    {
      id: 1,
      titulo: 'Como elegir tu primer guitarra',
      imagen: 'blog_1.jpg',
      fecha: '20 de Enero de 2022',
      extracto:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quibusdam, nesciunt dolores iure minima molestias voluptas adipisci.',
    },
    {
      id: 2,
      titulo: 'Como elegir tu primer guitarra',
      imagen: 'blog_2.jpg',
      fecha: '20 de Enero de 2022',
      extracto:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quibusdam, nesciunt dolores iure minima molestias voluptas adipisci.',
    },
    {
      id: 3,
      titulo: 'Como elegir tu primer guitarra',
      imagen: 'blog_3.jpg',
      fecha: '20 de Enero de 2022',
      extracto:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quibusdam, nesciunt dolores iure minima molestias voluptas adipisci.',
    },
    {
      id: 4,
      titulo: 'Como elegir tu primer guitarra',
      imagen: 'blog_4.jpg',
      fecha: '20 de Enero de 2022',
      extracto:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quibusdam, nesciunt dolores iure minima molestias voluptas adipisci.',
    },
  ]);
}
