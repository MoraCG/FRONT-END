import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
//  URL = environment.URL + 'skill/';

  URL = 'http://localhost:8080/skills'
  
  constructor(private http: HttpClient) { }

  getSkill(){
    return this.http.get<Skill[]>(this.URL+'/traer');
}
createSkill(skill:Skill){
  return this.http.post<Skill>(this.URL+'/crear',skill);
}
getSkillId(id:number){
  return this.http.get<Skill>(this.URL+"/"+id);
}
updateSkill(skill:Skill){
  return this.http.put<Skill>(this.URL+"/editar/"+skill.id,skill);
}
deleteSkill(skill:Skill){
  return this.http.delete<Skill>(this.URL+"/borrar/"+skill.id);
}
}