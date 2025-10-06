import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Hero, allHeroes } from '../../hero/hero';

@Component({
  selector: 'app-heroe-page',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './heroe-page.html',
  styleUrl: './heroe-page.css',
})
export class HeroePage {
  hero: Hero | undefined;
  isEditing = false;
  editName = '';
  editPower = '';

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.hero = allHeroes.find((h) => h.id === id);
  }

  startEdit() {
    if (this.hero) {
      this.isEditing = true;
      this.editName = this.hero.name;
      this.editPower = this.hero.power;
    }
  }

  cancelEdit() {
    this.isEditing = false;
    this.editName = '';
    this.editPower = '';
  }

  saveEdit() {
    if (this.hero && this.editName.trim() && this.editPower.trim()) {
      // Encontrar el héroe en el array y actualizarlo
      const heroIndex = allHeroes.findIndex((h) => h.id === this.hero!.id);
      if (heroIndex !== -1) {
        allHeroes[heroIndex].name = this.editName.trim();
        allHeroes[heroIndex].power = this.editPower.trim();

        // Actualizar la referencia local
        this.hero = { ...allHeroes[heroIndex] };
      }

      this.isEditing = false;
      this.editName = '';
      this.editPower = '';
    }
  }
}
