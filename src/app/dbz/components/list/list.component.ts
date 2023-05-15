import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/Character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  /* Con esta etiqueta (decorator) le decimos a Angular que el valor de la variable characterList va a venir desde afuera
    En este caso, el parent (main-page) es el que le va a pasar los elementos
    En el html del parent tengo lo siguiente: <dbz-list [characterList]="character"></dbz-list>
    donde: 
    • [characterLis] es el nombre de la variable que va a recibir, definida en este componente
    • character es la variable que va a pasar el parent, definida en main.page.component.ts
    Si queremos cambiar el nombre de la variable que va a recibir, lo hacemos así:
    @Input('charactersPepito') characterList: Character[] = []; 
    y en ese caso el html del parent seria así: <dbz-list [charactersPepito]="character"></dbz-list>
 */
  @Input()
  public characterList: Character[] = [
    {
      uid: '1',
      name: 'Goku',
      power: 15000
    }
  ];


  @Output()
  public onDeleteClick: EventEmitter<string> = new EventEmitter();


  onDeleteCharacter(id: string): void {
    this.onDeleteClick.emit(id);
  }
}
