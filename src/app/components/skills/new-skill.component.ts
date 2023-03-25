import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {

  skill: Skill = new Skill(0,"",0,"","");
  
  constructor(private router: Router, private service: SkillService) { }

  ngOnInit() {
  }

  obtener(e: any) {
    this.skill.img = e[0].base64;
  }

  Cancel() {
    this.router.navigate(['home'])
  }

  Guardar() {
    this.service.createSkill(this.skill).subscribe(data => {this.skill=data});
    this.router.navigate(['home']);
  }
}