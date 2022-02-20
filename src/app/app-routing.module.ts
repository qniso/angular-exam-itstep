import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';

const routes: Routes = [
  {
    path: 'mainpage',
    component: MainPageComponent,
  },
  {
    path: 'to-do-list',
    component: ToDoListComponent,
  },
  {
    path: '',
    redirectTo: 'mainpage',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
