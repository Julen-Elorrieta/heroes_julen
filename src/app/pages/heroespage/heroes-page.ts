import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from '../homepage/home-page';

@Component({
  selector: 'app-heroes-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './heroes-page.html',
  styleUrl: './heroes-page.css'
})
export class HeroesPage {
  heroes = HomePage.heroes;
}
