import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-new-estudio',
  templateUrl: './new-estudio.component.html',
  styleUrls: ['./new-estudio.component.css']
})
export class NewEstudioComponent implements OnInit {

  estudio:Educacion=new Educacion(0,"","","");

  constructor(private router:Router, private service:EducacionService) { }

  ngOnInit() {
  }

  
  Cancel(){
    this.router.navigate(['home'])
  }

  Guardar(){
    this.service.createEstudio(this.estudio)
    .subscribe(data=>{
      alert("Se Agrego con Exito...!!!");
      this.router.navigate(['home']);
    })
  }
}
