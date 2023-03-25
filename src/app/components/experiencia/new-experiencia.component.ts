import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { Experiencia } from 'src/app/model/experiencia';


@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {

  experiencia:Experiencia=new Experiencia(0,"","","");

  constructor(private router:Router, private service:ExperienciaService) { }
  
  ngOnInit() {
  }

  
  Cancel(){
    this.router.navigate(['home'])
  }

  Guardar(){
    this.service.createExperiencia(this.experiencia)
    .subscribe(data=>{
      alert("Se Agrego con Exito...!!!");
      this.router.navigate(['home']);
    })
  }
}