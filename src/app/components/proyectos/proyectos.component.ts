import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos: Proyecto[] = [];
  roles: string[];
  isAdmin = false;

  constructor(private router: Router, private service: ProyectoService, private tokenService: TokenService) { }
  ngOnInit(): void {
    this.service.getProyecto()
      .subscribe(data => {
        this.proyectos = data;
      })
      this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  Nuevo() {
    this.router.navigate(["addP"]);
  }

 Editar(proyecto: Proyecto): void {
    localStorage.setItem("id", proyecto.id.toString());
    this.router.navigate(["editP"]);
  }

  Delete(proyecto: Proyecto) {
    this.service.deleteProyecto(proyecto)
      .subscribe(data => {
        this.proyectos = this.proyectos.filter(p => p !== proyecto);
        alert("Proyecto eliminado...");
      })
  }
}
