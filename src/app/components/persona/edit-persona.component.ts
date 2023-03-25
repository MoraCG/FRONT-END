import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-persona',
  templateUrl: './edit-persona.component.html',
  styleUrls: ['./edit-persona.component.css']
})
export class EditPersonaComponent implements OnInit {

  persona :Persona=new Persona(0,"","","","","");
  
  constructor(private router:Router,private service:PersonaService) { }

  ngOnInit() {
    this.Editar();
  }

  obtener(e: any) {
    this.persona.img = e[0].base64;
  }

  Cancel(){
    this.router.navigate(['home'])
  }


  Editar(){
    let id=localStorage.getItem("id");
    this.service.getPersonaId(+id)
    .subscribe(data=>{
      this.persona=data;
      console.log(data);
    })
  }
  
  Actualizar(persona:Persona){
    this.service.updatePersona(persona)
    .subscribe(data=>{
      this.persona=data;
      alert ("La persona se editó exitosamente")
      this.router.navigate(['home']);
    })
  }
}
