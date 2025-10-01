import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Hero, allHeroes } from '../../hero/hero';

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
    this.hero = allHeroes.find(h => h.id === id);
  }
}
