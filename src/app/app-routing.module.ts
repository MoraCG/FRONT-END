import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEstudioComponent } from './components/educacion/edit-estudio.component';
import { NewEstudioComponent } from './components/educacion/new-estudio.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'logueado',component:HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'logueado',component:HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'addExp',component:NewExperienciaComponent, data: {expectedRol:['admin']}},
  {path:'editExp',component:EditExperienciaComponent, data: {expectedRol:['admin']}},
  {path:'editE',component:EditEstudioComponent, data: {expectedRol:['admin']}},
  {path:'addE',component:NewEstudioComponent, data: {expectedRol:['admin']}}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
