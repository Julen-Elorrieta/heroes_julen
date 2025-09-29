import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { allHeroes } from '../../hero/hero';

@Component({
  selector: 'app-heroes-page',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './heroes-page.html',
  styleUrl: './heroes-page.css'
})
export class HeroesPage {
  allHeroes = allHeroes;

  showAddHero = false;
  name = '';
  power = '';

  deleteHero(heroId: number) {
    this.allHeroes = this.allHeroes.filter(h => h.id !== heroId);
  }

  submitAddHero() {
    const newId = this.allHeroes.length ? Math.max(...this.allHeroes.map(h => h.id)) + 1 : 1;
    const newHero = { id: newId, name: this.name, power: this.power };
    this.allHeroes.push(newHero);
    this.closeAddHero();
  }

  closeAddHero() {
    this.showAddHero = false;
    this.name = '';
    this.power = '';
  }
}
