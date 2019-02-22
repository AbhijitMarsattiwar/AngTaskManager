import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { ViewtaskComponent } from './viewtask/viewtask.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SearchByTaskPipe } from './pipes/searchByTask.pipe';
import { SearchByParentPipe } from './pipes/searchByParent.pipe';
import { PriorityPipe } from './pipes/searchByPriority.pipe';
import { DateComparePipe } from './pipes/searchByDate.pipe';
import { EdittaskComponent } from './edittask/edittask.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewtaskComponent,
    AddtaskComponent,
    SearchByTaskPipe,
    SearchByParentPipe,
    PriorityPipe,
    DateComparePipe,
    EdittaskComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'add',
        component : AddtaskComponent
      },
      {
        path:'edit',
        component : EdittaskComponent
      },
      {
        path : '',
        component : ViewtaskComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
