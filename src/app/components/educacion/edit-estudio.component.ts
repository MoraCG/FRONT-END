import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-edit-estudio',
  templateUrl: './edit-estudio.component.html',
  styleUrls: ['./edit-estudio.component.css']
})
export class EditEstudioComponent implements OnInit {

  estudio :Educacion=new Educacion(0,"","","");
  
  constructor(private router:Router,private service:EducacionService) { }

  ngOnInit() {
    this.Editar();
  }

  Cancel(){
    this.router.navigate(['home'])
  }

  

  Editar(){
    let id=localStorage.getItem("id");
    this.service.getEstudioId(+id)
    .subscribe(data=>{
      this.estudio=data;
      console.log(data);
    })
  }
  
  Actualizar(estudio:Educacion){
    this.service.updateEstudio(estudio)
    .subscribe(data=>{
      this.estudio=data;
      alert("Se actualizo con exito");
      this.router.navigate(['home']);
    })
  }
}
