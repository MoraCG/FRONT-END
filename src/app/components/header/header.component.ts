import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';
import { PortafolioService } from 'src/app/servicios/portafolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged = false;
  miPortafolio:any;
  personas: Persona=new Persona(0,"","","","","");
  roles: string[];
  isAdmin = false;
  constructor(private datosPortafolio:PortafolioService, private router:Router, private tokenService:TokenService, private service: PersonaService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
    
    this.datosPortafolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.miPortafolio=data;
    });

    this.service.getPersona()
      .subscribe(data => {
        this.personas = data;
      })
      this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }

  login(){
    this.router.navigate(['/login'])
  }

 Editar(persona: Persona): void {
    localStorage.setItem("id", persona.id.toString());
    this.router.navigate(["editPers"]);
  }

}
