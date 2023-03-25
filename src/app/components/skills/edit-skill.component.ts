import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {

  skill: Skill = new Skill(0, "", 0, "","");

  constructor(private router: Router, private service: SkillService) { }

  ngOnInit() {
    this.Editar();
  }

  Cancel() {
    this.router.navigate(['home'])
  }

  obtener(e: any) {
    this.skill.img = e[0].base64;
  }

  Editar() {
    let id = localStorage.getItem("id");
    this.service.getSkillId(+id)
      .subscribe(data => {
        this.skill = data;
      })
  }

  Actualizar(skill: Skill) {
    this.service.updateSkill(skill)
      .subscribe(data => {
        this.skill = data;
        this.router.navigate(['home']);
      })
  }
}
