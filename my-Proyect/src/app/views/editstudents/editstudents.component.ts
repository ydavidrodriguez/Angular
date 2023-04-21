import { Component } from '@angular/core';
import{Router,ActivatedRoute} from '@angular/router'
import{ApiService} from '../../Services/Api/api.service'
import { StudentI } from 'src/app/Models/MStudes.interface';
import { Guid } from 'guid-typescript';
import{FormGroup,FormControl,Validators} from '@angular/forms';
import { DatePipe, formatDate } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editstudents',
  templateUrl: './editstudents.component.html',
  styleUrls: ['./editstudents.component.css']
})
export class EditstudentsComponent {

student:StudentI;
UpdateStuden:StudentI;
DeleteStuden:StudentI;
ID:Guid=Guid.parse('3fa85f64-5717-4562-b3fc-2c963f66afa7');

editstudent = new FormGroup({
  
  id:new FormControl<Guid|Guid>(this.ID,{nonNullable: true, validators: [Validators.required]}),
  name: new FormControl('',{nonNullable: true}),
  lastName: new FormControl('',{nonNullable: true}),
  birthDate: new FormControl('',{nonNullable: true})

});

constructor(private activerouter:ActivatedRoute,private router:Router,private api:ApiService,private datepipe:DatePipe)
{ 
  this.student = {} as StudentI;
  this.UpdateStuden ={} as StudentI;
  this.DeleteStuden ={} as StudentI;
}
ngOnInit():void{

  let idstudent = this.activerouter.snapshot.paramMap.get('id') as string;
  console.log(idstudent);


  this.api.GetStudentn(idstudent).subscribe(data=>{
    console.log(data);
    this.student = data;
    let dates = this.datepipe.transform(this.student.birthDate,"yyyy-MM-dd") as string
    this.editstudent.setValue({
       'id':this.student.id,
       'name':this.student.name,
       'lastName':this.student.lastName,
       'birthDate':dates 

    }) 
    
    
  });

  }

  PostForm(from:FormGroup){

    this.UpdateStuden.id = from.value.id;
    this.UpdateStuden.lastName = from.value.lastName;
    this.UpdateStuden.name = from.value.name;
    this.UpdateStuden.birthDate = from.value.birthDate;
    console.log(from.value.birthDate);
    console.log(this.UpdateStuden);

    this.api.Updatestuden(this.UpdateStuden).subscribe(data=>{

      if(data==true)
      {
        Swal.fire('', 'Actualizado Correctamente!', 'success');
        this.router.navigate(['students'])
      }
      else{
        Swal.fire('Hi', 'No se Actualizo!', 'error');
      }

    })

  }
  DeleteStud(forms:FormGroup)
  {
    this.DeleteStuden.id = forms.value.id;
    this.DeleteStuden.lastName = forms.value.lastName;
    this.DeleteStuden.name = forms.value.name;
    this.DeleteStuden.birthDate = forms.value.birthDate;

this.api.Deletestude(this.DeleteStuden).subscribe(data=>{

  if(data==true)
  {
    Swal.fire('', 'Eliminado Correctamente!', 'success');
    this.router.navigate(['students'])
  }
  else{
    Swal.fire('Hi', 'No se a Eliminado Correctamente!', 'error');
  }


})
     

  }


}
