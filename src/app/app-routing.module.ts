import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEstudioComponent } from './components/educacion/edit-estudio.component';
import { NewEstudioComponent } from './components/educacion/new-estudio.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditPersonaComponent } from './components/persona/edit-persona.component';
import { NewPersonaComponent } from './components/persona/new-persona.component';
import { EditProyectoComponent } from './components/proyectos/edit-proyecto.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto.component';
import { EditSkillComponent } from './components/skills/edit-skill.component';
import { NewSkillComponent } from './components/skills/new-skill.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'logueado',component:HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'addExp',component:NewExperienciaComponent, data: {expectedRol:['admin']}},
  {path:'editExp',component:EditExperienciaComponent, data: {expectedRol:['admin']}},
  {path:'editE',component:EditEstudioComponent, data: {expectedRol:['admin']}},
  {path:'addE',component:NewEstudioComponent, data: {expectedRol:['admin']}},
  {path:'addP',component:NewProyectoComponent, data: {expectedRol:['admin']}},
  {path:'editP',component:EditProyectoComponent, data: {expectedRol:['admin']}},
  {path:'addPersona',component:NewPersonaComponent, data: {expectedRol:['admin']}},
  {path:'editPersona',component:EditPersonaComponent, data: {expectedRol:['admin']}},
  {path:'editS',component:EditSkillComponent, data: {expectedRol:['admin']}},
  {path:'addS',component:NewSkillComponent, data: {expectedRol:['admin']}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
