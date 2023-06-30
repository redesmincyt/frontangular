import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { BarranavComponent } from './components/barranav/barranav.component';
import { HeaderComponent } from './components/header/header.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { PorfolioService } from './servicios/porfolio.service';
import { HttpClientModule} from '@angular/common/http';
import { AddExperienciaComponent } from './components/add-experiencia/add-experiencia.component'

@NgModule({
  declarations: [
    AppComponent,
    ExperienciaComponent,
    BarranavComponent,
    HeaderComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    AddExperienciaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
