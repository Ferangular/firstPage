import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Footer } from './core/shared/footer/footer';
import { Header } from './core/shared/header/header';
import { Navbar } from './core/shared/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Header, RouterLink, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('firstPage');
}
