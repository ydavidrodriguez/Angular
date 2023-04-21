import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{StudentsComponent}from './views/students/students.component';
import{CreatestudentsComponent}from './views/createstudents/createstudents.component';
import{EditstudentsComponent}from './views/editstudents/editstudents.component';
import{LoginComponent}from './views/login/login.component';
const routes: Routes = [

{path:'',redirectTo:'students',pathMatch:'full'},
{path:'login',component:LoginComponent},
{path:'students',component:StudentsComponent},
{path:'createstudents',component:CreatestudentsComponent},
{path:'editstudents/:id',component:EditstudentsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [StudentsComponent,CreatestudentsComponent,EditstudentsComponent,LoginComponent]
