import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Hero } from '../../hero/hero';
import { Router } from '@angular/router';
import { allHeroes } from '../../hero/hero';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-heroe-page',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './heroe-page.html',
  styleUrl: './heroe-page.css'
})
export class HeroePage {
  hero: Hero | undefined;

  showAddHero = false;
  name = '';
  power = '';
  newName = '';
  newPower = '';

  editHeroe() {
    if (this.hero) {
      this.hero.name = this.newName;
      this.hero.power = this.newPower;
    }
  }

  closeAddHero() {
    this.showAddHero = false;
    this.newName = '';
    this.newPower = '';
  }

  constructor(private route: ActivatedRoute, private router: Router) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.hero = allHeroes.find(h => h.id === id);
  }
}
