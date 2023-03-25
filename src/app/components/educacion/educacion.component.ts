import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  estudios: Educacion[] = [];
  roles : string[];
  isAdmin = false;

  constructor(private router: Router, private service: EducacionService, private tokenService : TokenService) { }
  ngOnInit(): void {
    this.service.getEstudio()
      .subscribe(data => {
        this.estudios = data;
      })
      this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  // Listar(){
  //   this.router.navigate(["listarP"]);
  // }
  Nuevo() {
    this.router.navigate(["addE"]);
  }

 Editar(estudio: Educacion): void {
    localStorage.setItem("id", estudio.id.toString());
    this.router.navigate(["editE"]);
  }

  Delete(estudio: Educacion) {
    this.service.deleteEstudio(estudio)
      .subscribe(data => {
        this.estudios = this.estudios.filter(p => p !== estudio);
        alert("Estudio eliminado...");
      })
  }

}
