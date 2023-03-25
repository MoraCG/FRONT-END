import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {

  proyecto:Proyecto=new Proyecto(0,"","","");
  constructor(private router:Router, private service:ProyectoService) { }

  ngOnInit() {
  }

  
  Cancel(){
    this.router.navigate(['cancelar'])
  }

  Guardar(){
    this.service.createProyecto(this.proyecto)
    .subscribe(data=>{
      alert("Se Agrego con Exito...!!!");
      this.router.navigate(['home']);
    })
  }
}
