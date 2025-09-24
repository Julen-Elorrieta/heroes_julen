import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {
  static heroes = [
    { id: 1, name: 'Superman', power: 'Superfuerza, vuelo, visión láser' },
    { id: 2, name: 'Batman', power: 'Inteligencia, artes marciales, tecnología' },
    { id: 3, name: 'Wonder Woman', power: 'Superfuerza, lazo de la verdad, agilidad' },
    { id: 4, name: 'Flash', power: 'Supervelocidad' }
  ];

  constructor(private router: Router) {}

  goToHeroesPage() {
    this.router.navigate(['/heroes']);
  }
}
