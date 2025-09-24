import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { HomePage } from '../homepage/home-page';


interface Hero {
  id: number;
  name: string;
  power: string;
}

@Component({
  selector: 'app-heroe-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './heroe-page.html',
  styleUrl: './heroe-page.css'
})

export class HeroePage {
  hero: Hero | undefined;

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.hero = HomePage.heroes.find(h => h.id === id);
  }
}
