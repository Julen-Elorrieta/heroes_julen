import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-heroe-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './heroe-page.html',
  styleUrl: './heroe-page.css'
})
export class HeroePage {

}
