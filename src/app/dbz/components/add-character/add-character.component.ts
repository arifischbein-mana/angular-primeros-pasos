import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/Character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    uid: '',
    name: '',
    power: 0
  };

  emitCharacter(): void {
    if(this.character.name.length === 0) { 
      return; 
    }

    /* Las dos formas hacen lo mismo. 
    La primer forma crea una nueva instancia mediante la sintaxis de propagación de objeto {...} y luego emite un nuevo
    valor
    La segunda emite el objeto original this.character y luego crea una nueva instancia de character con valores
    vacíos para su próxima inserción.
      Fuente ChatGPT:
    La primera forma es preferible porque garantiza que se emita un nuevo objeto con los valores actualizados y no hay 
    efectos secundarios en la instancia original de character. La segunda forma es menos segura porque puede haber 
    efectos secundarios imprevistos en otras partes del código que dependen de la instancia original de character.
    */
    this.onNewCharacter.emit({ ...this.character });
    this.character.name = "";
    this.character.power = 0;
  
    // this.onNewCharacter.emit( this.character );
    // this.character = { name: '', power: 0 };
  }
}
