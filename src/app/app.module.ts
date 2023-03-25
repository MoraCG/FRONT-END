import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { ExperienciaService } from './service/experiencia.service';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewEstudioComponent } from './components/educacion/new-estudio.component';
import { EditEstudioComponent } from './components/educacion/edit-estudio.component';
import { EducacionService } from './service/educacion.service';
import { NewProyectoComponent } from './components/proyectos/new-proyecto.component';
import { EditProyectoComponent } from './components/proyectos/edit-proyecto.component';
import { ProyectoService } from './service/proyecto.service';
import { PersonaComponent } from './components/persona/persona.component';
import { PersonaService } from './service/persona.service';
import { EditPersonaComponent } from './components/persona/edit-persona.component';
import { NewPersonaComponent } from './components/persona/new-persona.component';
import { NewSkillComponent } from './components/skills/new-skill.component';
import { EditSkillComponent } from './components/skills/edit-skill.component';
import { SkillService } from './service/skill.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProyectosComponent,
    AboutMeComponent,
    ExperienciaComponent,
    SkillsComponent,
    EducacionComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewEstudioComponent,
    EditEstudioComponent,
    NewProyectoComponent,
    EditProyectoComponent,
    PersonaComponent,
    EditPersonaComponent,
    NewPersonaComponent,
    NewSkillComponent,
    EditSkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [
    interceptorProvider,
    ExperienciaService,
    EducacionService,
    ProyectoService,
    PersonaService,
    SkillService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
