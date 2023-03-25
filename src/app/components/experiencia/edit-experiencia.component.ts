import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit{

  experiencia: Experiencia = new Experiencia(1, "", "", "");

  constructor(private router: Router, private service: ExperienciaService) { }

  ngOnInit() {
    this.Editar();
  }

  Cancel() {
    this.router.navigate(['home'])
  }



  Editar(): void {
    let id = localStorage.getItem("id");
    this.service.getExperienciaId(+id)
    .subscribe(data => {
      this.experiencia = data;
      console.log(data);
    })
  }

  Actualizar(experiencia: Experiencia) {
    this.service.updateExperiencia(experiencia)
      .subscribe(data => {
        this.experiencia = data;
        this.router.navigate(['home']);
      })
  }

}

