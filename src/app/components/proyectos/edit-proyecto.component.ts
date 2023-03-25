import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
  proyecto :Proyecto=new Proyecto(0,"","","");
  
  constructor(private router:Router,private service:ProyectoService) { }

  ngOnInit() {
    this.Editar();
  }

  Cancel(){
    this.router.navigate(['home'])
  }

  

  Editar(){
    let id=localStorage.getItem("id");
    this.service.getProyectoId(+id)
    .subscribe(data=>{
      this.proyecto=data;
      console.log(data);
    })
  }
  
  Actualizar(proyecto:Proyecto){
    this.service.updateProyecto(proyecto)
    .subscribe(data=>{
      this.proyecto=data;
      alert ("El Proyecto se editó exitosamente")
      this.router.navigate(['home']);
    })
  }
}
