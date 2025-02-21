import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleDoubleDown, faAngleDoubleUp, faArrowDown, faExpand, faExpandAlt, faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-what-we-offer',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './what-we-offer.component.html',
  styleUrl: './what-we-offer.component.scss'
})
export class WhatWeOfferComponent {
    faDown = faAngleDoubleDown;
    expandCard: boolean = false;
    iconHeader: string = 'all';

    toggleCard() {
      this.expandCard = !this.expandCard
      if (this.faDown == faAngleDoubleUp) {
        this.faDown = faAngleDoubleDown
        this.iconHeader = 'all'
      }
      else {
        this.faDown = faAngleDoubleUp
        this.iconHeader = 'less'
      }
    }
}