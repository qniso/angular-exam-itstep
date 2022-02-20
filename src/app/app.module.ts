import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//MATERIAL
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';

//COMPONENTS
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalTodoCardComponent, UserCardModalDialog } from './shared/components/modal-create-card/modal-create-card.component';
import { MatNativeDateModule } from '@angular/material/core';
import {ModalChangeCardComponent } from './shared/components/modal-change-card/modal-change-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    MainPageComponent,
    NavbarComponent,
    ModalTodoCardComponent,
    ModalChangeCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatRadioModule,
    MatCheckboxModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  providers: [UserCardModalDialog,  MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
