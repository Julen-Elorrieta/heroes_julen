import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Hero } from '../../hero/hero';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {
  static heroes: Hero[] = [
    { id: 1, name: 'Superman', power: 'Superfuerza, vuelo, visión láser' },
    { id: 2, name: 'Batman', power: 'Inteligencia, artes marciales, tecnología' },
    { id: 3, name: 'Wonder Woman', power: 'Superfuerza, lazo de la verdad, agilidad' },
    { id: 4, name: 'Flash', power: 'Supervelocidad' }
  ];

  static allHeroes: Hero[] = [
    { id: 1, name: 'Superman', power: 'Superfuerza, vuelo, visión láser' },
    { id: 2, name: 'Batman', power: 'Inteligencia, artes marciales, tecnología' },
    { id: 3, name: 'Wonder Woman', power: 'Superfuerza, lazo de la verdad, agilidad' },
    { id: 4, name: 'Flash', power: 'Supervelocidad' },
    { id: 5, name: 'Green Lantern', power: 'Anillo de poder, vuelo, energía' },
    { id: 6, name: 'Aquaman', power: 'Comunicación con animales marinos, fuerza' },
    { id: 7, name: 'Cyborg', power: 'Tecnología avanzada, fuerza, armas' },
    { id: 8, name: 'Martian Manhunter', power: 'Cambio de forma, telepatía, vuelo' },
    { id: 9, name: 'Green Arrow', power: 'Tiro con arco, artes marciales' },
    { id: 10, name: 'Hawkgirl', power: 'Vuelo, fuerza, combate cuerpo a cuerpo' },
    { id: 11, name: 'Black Canary', power: 'Grito sónico, artes marciales' }
  ];

  topHeroes: Hero[] = HomePage.heroes;

  constructor(private router: Router) {}

  goToHeroesPage() {
    this.router.navigate(['/heroes']);
  }
}
