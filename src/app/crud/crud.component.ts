import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent{
title:string = "Crud Angular";
employees = [
  {name:"carlos",position:"manager", email:"carlostuna015@gmail.com"},
  {name:"Aaron",position:"designer", email:"carlostuna015@gmail.com"},
  {name:"Luis",position:"programing", email:"carlostuna015@gmail.com"}
]

model:any={};
model2:any={};
value:any=0;
msg:string = "";
editValue:boolean=false;

addEmployee():void{
  this.employees.push(this.model);
  this.msg = "add employee";
  this.model = {};
}

deleteEmployee(i:any):void{
let response = confirm("are you sure?");
if(response){
  this.employees.splice(i,1);
  this.msg = "delete employee";
}
}

editEmployee(i:any):void{
  this.editValue = true;
  this.model2.name = this.employees[i].name;
  this.model2.email = this.employees[i].email;
  this.model2.position = this.employees[i].position;
  this.value = i;
}

updateEmployee():void{
let i = this.value;
for(let j=0;j<this.employees.length;j++){
  if(i==j){
    this.employees[i] = this.model2;
    this.model2 = {};
    this.msg = "update employee";
  }
}
this.editValue = false;
}

closeAlert():void{
  this.msg="";
}

closeUpdate():void{
  this.editValue = false;
}
}
