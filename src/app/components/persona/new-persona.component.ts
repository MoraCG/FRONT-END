import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-new-persona',
  templateUrl: './new-persona.component.html',
  styleUrls: ['./new-persona.component.css']
})
export class NewPersonaComponent implements OnInit {

  persona:Persona=new Persona(0,"","","","","");

  constructor(private router:Router, private service:PersonaService) { }

  ngOnInit() {
  }

  obtener(e: any) {
    this.persona.img = e[0].base64;
  }
  
  Cancel(){
    this.router.navigate(['cancelar'])
  }

  Guardar(){
    this.service.createPersona(this.persona)
    .subscribe(data=>{
      alert("Se Agrego con Exito...!!!");
      this.router.navigate(['home']);
    })
  }
}