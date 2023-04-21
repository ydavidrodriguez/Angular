import { Component } from '@angular/core';
import { Guid } from 'guid-typescript';
import { StudentI } from 'src/app/Models/MStudes.interface';
import{FormGroup,FormControl,Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import{Router,ActivatedRoute} from '@angular/router'
import{ApiService} from '../../Services/Api/api.service'


@Component({
  selector: 'app-createstudents',
  templateUrl: './createstudents.component.html',
  styleUrls: ['./createstudents.component.css']
})
export class CreatestudentsComponent {

  
  CreateStuden:StudentI;
  ID:Guid=Guid.parse('3fa85f64-5717-4562-b3fc-2c963f66afa7');

  newstudent = new FormGroup({
  
    id:new FormControl<Guid|Guid>(this.ID,{nonNullable: true, validators: [Validators.required]}),
    name: new FormControl('',{nonNullable: true}),
    lastName: new FormControl('',{nonNullable: true}),
    birthDate: new FormControl('',{nonNullable: true})
  
  });

    constructor(private activerouter:ActivatedRoute,private router:Router,private api:ApiService){
      this.CreateStuden ={} as StudentI;
    }
  PostForm(from:FormGroup){

   
    this.CreateStuden.lastName = from.value.lastName;
    this.CreateStuden.name = from.value.name;
    this.CreateStuden.birthDate = from.value.birthDate;


    this.api.CreateStudent(this.CreateStuden).subscribe(data=>{

      if(data==true)
      {
        Swal.fire('', 'Creado Correctamente!', 'success');
        this.router.navigate(['students'])
      }
      else{
        Swal.fire('Hi', 'No se Actualizo!', 'error');
      }

    })

  }

}
