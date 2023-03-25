import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  personas: Persona[] = [];
  roles: string[];
  isAdmin = false;

  constructor(private router: Router, private service: PersonaService, private tokenService: TokenService) { }
  ngOnInit(): void {
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

  Nuevo() {
    this.router.navigate(["addPersona"]);
  }

 Editar(personas: Persona): void {
    localStorage.setItem("id", personas.id.toString());
    this.router.navigate(["editPersona"]);
  }

  Delete(personas: Persona) {
    this.service.deletePersona(personas)
      .subscribe(data => {
        this.personas = this.personas.filter(p => p !== personas);
        alert("Proyecto eliminado...");
      })
  }
}
