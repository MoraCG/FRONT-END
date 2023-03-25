import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencias: Experiencia[] = [];
  roles: string[];
  isAdmin = false;

  constructor(private router: Router, private service: ExperienciaService, private tokenService : TokenService) { }
  ngOnInit(): void {
    this.service.getExperiencia()
      .subscribe(data => {
        this.experiencias = data;
      })
      this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  Nuevo() {
    this.router.navigate(["addExp"]);
  }

 Editar(experiencia: Experiencia): void {
    localStorage.setItem("id", experiencia.id.toString());
    this.router.navigate(["editExp"]);
  }

  Delete(experiencia: Experiencia) {
    this.service.deleteExperiencia(experiencia)
      .subscribe(data => {
        this.experiencias = this.experiencias.filter(p => p !== experiencia);
        alert("Experiencia eliminado...");
      })
  }
}