import { Component, ElementRef, Input, OnChanges, OnInit, ViewChild } from '@angular/core';

import { TodoList } from '../../shared/mocks/todos';
import { TODOLISTS } from '../../shared/mocks/mock-todos';

import {UserCardModalDialog} from '../../shared/components/modal-create-card/modal-create-card.component';

import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  @ViewChild('card') private cardElement!: ElementRef;


  ToDoList = TODOLISTS;
  
  selectedCard!: TodoList;

  constructor(
    public userCardModalDialog : UserCardModalDialog,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.openAddDialog()
  }

  openAddDialog(){
    const dialogOpen = this.userCardModalDialog.openDialog().subscribe()
  }
  changeCard(card: TodoList){
    this.selectedCard = card;
    console.log(this.selectedCard);
    // console.log(`this.selectedCard = ${this.selectedCard}`);

  }
  //при нажатии по карточке появляется кнопка нужно добавить 
  delete(index:number){
    let arr =  this.ToDoList;
    console.log(index);
    console.log( this.ToDoList);
    arr.splice(index, 1)
    // if(index> -1){
      
    // }

  }
  
}
