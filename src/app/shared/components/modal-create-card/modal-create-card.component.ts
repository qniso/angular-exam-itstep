import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TODOLISTS } from '../../mocks/mock-todos';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Priority } from '../../interfaces/priority.interface';

@Injectable()
export class UserCardModalDialog {
  constructor(private dialog: MatDialog) {}

  openDialog(): Observable<any> {
    const dialogRef = this.dialog.open(ModalTodoCardComponent, {
      disableClose: true,
      hasBackdrop: true,
      minHeight: 'px',
      width: '700px',
    });

    return dialogRef.afterClosed();
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}

@Component({
  selector: 'app-create-todo-card',
  templateUrl: './modal-create-card.component.html',
  styleUrls: ['./modal-create-card.component.scss'],
})
export class ModalTodoCardComponent implements OnInit {
  @Input() priority: Priority[] = [
    { priority: 'High' },
    { priority: 'Medium' },
    { priority: 'Low' },
  ];

  ToDoList = TODOLISTS;

  toDoCard!: FormGroup;

  constructor(
    public diaologRef: MatDialogRef<ModalTodoCardComponent>,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.toDoCard = this.fb.group({
      name: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      tag: new FormControl('', Validators.required),
      priority: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }

  testFunc() {
    let b = {
      name: this.toDoCard.controls['name'].value,
      date: this.toDoCard.controls['date'].value,
      details: this.toDoCard.controls['description'].value,
      tegs: this.toDoCard.controls['tag'].value,
      priority: this.toDoCard.controls['priority'].value,
    };
    this.ToDoList.push(b);
  }

  submit() {
    this.testFunc();
    this.diaologRef.close();
    // console.log(this.ToDoList);
  }
}
