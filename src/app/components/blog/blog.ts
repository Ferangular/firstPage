import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';

interface BlogPost {
  id: number;
  titulo: string;
  imagen: string;
  fecha: string;
  extracto: string;
}

@Component({
  selector: 'app-blog',
  imports: [RouterLink, TranslocoModule],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {
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
