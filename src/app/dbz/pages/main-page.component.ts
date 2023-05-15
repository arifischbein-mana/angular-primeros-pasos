import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/Character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {

    constructor( private dbzService: DbzService) { }

    get characters(): Character[] {
        return this.dbzService.characters;
    }

    onDeleteCharacter(id: string): void {
        this.dbzService.onDeleteItemById(id);
    }

    onNewCharacter(character: Character): void {
        this.dbzService.addCharacter(character);
    }
}