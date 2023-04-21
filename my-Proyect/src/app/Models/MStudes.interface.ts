import { Guid } from "guid-typescript";

export interface StudentI{

    id: Guid;
    name:string;
    lastName:string; 
    birthDate:Date; 

}