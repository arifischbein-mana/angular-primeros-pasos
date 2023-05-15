import { Component } from '@angular/core';

@Component({
  selector: 'app-herores-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['ironman', 'spiderman', 'hulk', 'thor', 'capitan america'];
  public deletedHero?: string;

  deleteLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }
}
