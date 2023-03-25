import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  {path:'editExp',component:EditExperienciaComponent, data: {expectedRol:['admin']}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
