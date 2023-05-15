import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/Character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {

    public characters: Character[] = [
        {
            uid: uuid(),
            name: 'Goku',
            power: 15000
        },
        {
            uid: uuid(),
            name: 'Vegeta',
            power: 8500
        },
        {
            uid: uuid(),
            name: 'Krillin',
            power: 8500
        },
    ];

    addCharacter(character: Character): void {
        console.log('Main Page Component');
        console.log(character);
        character.uid = uuid();
        this.characters.push(character);
    }

    onDeleteItemById(id: string): void {
        this.characters = this.characters.filter(character => 
            character.uid !== id
        );
    }
    
}