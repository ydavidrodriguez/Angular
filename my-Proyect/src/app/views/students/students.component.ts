import { Component } from '@angular/core';

import{FormGroup,FormControl,Validators} from '@angular/forms'
import{ApiService} from '../../Services/Api/api.service';
import {StudentI}from '../../Models/MStudes.interface';
import {Router} from '@angular/router'
import { Guid } from 'guid-typescript';





@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent  {

 studentse:StudentI[];
 arr:[];
// Loginforms = new FormGroup({
//     usuario: new FormControl('',Validators.required),
//     password : new FormControl('',Validators.required)

// })

constructor(private api:ApiService,private router:Router)
{
  this.studentse = [];
  this.arr = [];
}
ngOnInit(): void {
  this.api.GetStudents().subscribe(data => {
    this.studentse = data;
  });
}

EditStudent(id:Guid){
  console.log(id);

  this.router.navigate(['editstudents',id])
}

NewStudent(){
  this.router.navigate(['createstudents'])
}


}
