import { Injectable } from '@angular/core';
import { StudentI } from '../../Models/MStudes.interface';
import {HttpClient,HttpHeaders}from '@angular/common/http';
import {Observable} from 'rxjs';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

url:string ="https://localhost:7067/api/";

  constructor(private http:HttpClient) { }

  GetStudents():Observable<StudentI[]>{
    let direccion = this.url + "Student/ListByStudent";
      return this.http.get<StudentI[]>(direccion);

  }
  GetStudentn(id:string):Observable<StudentI>{
    let direccion = this.url + "Student/ByStudent/"+ Guid.parse(id);
    console.log(direccion);
    return this.http.get<StudentI>(direccion);
  }
  Updatestuden(stude:StudentI):Observable<boolean>
  {
    let direccion = this.url + "Student/UpadateStudent";
    return this.http.put<boolean>(direccion,stude);
  }
  Deletestude(stude:StudentI):Observable<boolean>{

    let direccion = this.url +"Student/DeleteStudent";
    return this.http.put<boolean>(direccion,stude);

  }
  CreateStudent(stude:StudentI):Observable<boolean>
  {
    console.log(stude);
    let direccion = this.url + "Student/CreateStudent";
    return this.http.post<boolean>(direccion,stude);
  }


}
