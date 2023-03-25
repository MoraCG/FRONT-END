import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skill[] = [];
  roles : string[];
  isAdmin = false;

  constructor(private router: Router, private service: SkillService, private tokenService : TokenService) { }
  ngOnInit(): void {
    this.service.getSkill()
      .subscribe(data => {
        this.skills = data;
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
    this.router.navigate(["addS"]);
  }

  Editar(skill: Skill): void {
    localStorage.setItem("id", skill.id.toString());
    this.router.navigate(["editS"]);
  }

  Delete(skill: Skill) {
    this.service.deleteSkill(skill)
      .subscribe(data => {
        this.skills = this.skills.filter(p => p !== skill);
      })
  }
}
