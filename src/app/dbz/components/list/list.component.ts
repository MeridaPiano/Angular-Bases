import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList : Character[] = []

  @Output()
  public onDeleteCharacterId: EventEmitter<string> = new EventEmitter();

  OnDeleteCharacterById(id?: string):void{
    if(!id) return;
    this.onDeleteCharacterId.emit(id);
  }

  // emitIndex(index:number):void{
  //   this.onDeleteCharacterIndex.emit(index);
  //   console.log("Character to delete: ", index)
  // }
}
